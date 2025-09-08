import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path, { extname } from "node:path";
import { JSDOM, VirtualConsole } from "jsdom";
import TurndownService from "turndown";
import { Primitive } from "@/util/data";

const MANUAL_REVIEW_DIR = "_requires-manual-review";
const EMPTY_LIQUID_OBJECT_FIELDS_PLACEHOLDER = "/** empty liquid object */";
const PATTERN_IMPORTS = /import\s*{\s*([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;

const biomeBinary = path.join(
	process.cwd(),
	"node_modules/@biomejs/biome",
	"bin/biome",
);

const turndown = new TurndownService();

turndown.addRule("absolute urls", {
	filter: (node) =>
		node.tagName === "a" &&
		!(node as HTMLAnchorElement).href.startsWith("https://shopify.dev"),
	replacement: (content) => new URL(content, "https://shopify.dev").toString(),
});

function upperFirst(str: string): string {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerFirst(str: string): string {
	if (!str) return "";
	return str.charAt(0).toLowerCase() + str.slice(1);
}

function toPascalCase(str: string): string {
	return str
		.split(/[-_\s]+/)
		.map((word) => upperFirst(word.toLowerCase()))
		.join("");
}

function toCamelCase(str: string): string {
	return lowerFirst(toPascalCase(str));
}

function toKebabCase(str: string, lower = true): string {
	return str
		.split(/[-_\s]+/)
		.map((word) => (lower ? word.toLowerCase() : word))
		.join("-");
}

function writeFileSyncRecursive(
	filename: string,
	content: string,
): {
	code: string;
	filename: string;
} {
	// normalize path separator to '/' instead of path.sep,
	// as / works in node for Windows as well, and mixed \\ and / can appear in the path
	let filepath = filename.replace(/\\/g, "/");

	// preparation to allow absolute paths as well
	let root = "";
	if (filepath[0] === "/") {
		root = "/";
		filepath = filepath.slice(1);
	} else if (filepath[1] === ":") {
		root = filepath.slice(0, 3); // c:\
		filepath = filepath.slice(3);
	}

	// create folders all the way down
	const folders = filepath.split("/").slice(0, -1); // remove last item, file
	folders.reduce(
		(acc, folder) => {
			const folderPath = `${acc + folder}/`;
			if (!existsSync(folderPath)) {
				mkdirSync(folderPath);
			}
			return folderPath;
		},
		root, // first 'acc', important
	);

	// write file
	writeFileSync(root + filepath, content, "utf-8");

	return { filename: root + filepath, code: content };
}

/**
 * A map of import paths to their corresponding imports
 * e.g. `{ "@/util/data": Set<"DataType", "Primitive"> }`
 */
type Imports = Map<string, Set<string>>;
type LiquidObjectSpec = Awaited<ReturnType<typeof scrapeObject>>;

async function scrapeObject(url: URL) {
	if (!url.pathname.startsWith("/docs/api/liquid/objects")) {
		console.error(`${url} is not a valid object URL!`);
		return;
	}

	const dom = await fetch(url)
		.then((res) => res.text())
		.then((html) => {
			const virtualConsole = new VirtualConsole();
			virtualConsole.on("error", () => {
				// No-op to skip console errors.
			});
			return new JSDOM(html, { virtualConsole });
		});

	const name = dom.window.document.body.querySelector("h1")?.textContent;

	let description =
		dom.window.document.body.querySelector(`h1 + .markdown`)?.innerHTML;

	description = description ? turndown.turndown(description) : description;

	const properties = Iterator.from(
		dom.window.document.body.querySelectorAll(`[class^="_ObjectProperty"]`),
	)
		.map((element) => {
			const detail = element.querySelector(
				`[class^="_PropertyDetail"]`,
			)?.textContent;
			const returnType = element.querySelector(
				`[class^="_ReturnType"]`,
			)?.textContent;

			let returnTypeDocLink = (
				element.querySelector(
					`[class^="_ReturnType"] a[class^="_Link"]`,
				) as HTMLAnchorElement | null
			)?.href;

			const description = element.querySelector(
				`[class^="_PropertyDescription"] .markdown`,
			)?.innerHTML;

			const arrayOfRegex = /^array of (.+)$/i;
			const setOfValuesRegex = /^(.+) from a set of values$/i;
			const arrayMatch = returnType?.match(arrayOfRegex);
			const setOfValuesMatch = returnType?.match(setOfValuesRegex);
			const isArray = !!arrayMatch;
			const isDictionary = isArray || !returnType;
			const isSetOfValues = !!setOfValuesMatch;

			let actualReturnType: string | null | undefined = returnType;

			if (isArray) {
				actualReturnType = arrayMatch?.[1];
			} else if (isSetOfValues) {
				actualReturnType = setOfValuesMatch?.[1];
			}

			// handle some known incomplete documentation
			if (!actualReturnType) {
				if (name === "brand" && detail === "colors") {
					actualReturnType = "brand_color";
					returnTypeDocLink = "/docs/api/liquid/objects/brand_color";
				}

				if (detail === "currency") {
					actualReturnType = "currency";
					returnTypeDocLink = "/docs/api/liquid/objects/currency";
				}

				if (detail === "filter_value_display") {
					actualReturnType = "filter_value_display";
					returnTypeDocLink = "/docs/api/liquid/objects/filter_value_display";
				}

				if (detail === "metafields") {
					actualReturnType = "metafield";
					returnTypeDocLink = "/docs/api/liquid/objects/metafield";
				}
			}

			return {
				detail,
				returnType: actualReturnType,
				returnTypeDocLink,
				isDictionary,
				isArray,
				description: description ? turndown.turndown(description) : description,
			};
		})
		.toArray();

	return { name, description, properties };
}

async function createObjectModule(object: LiquidObjectSpec): Promise<{
	code: string;
	filename: string;
	imports: Imports;
}> {
	if (!object?.name) {
		throw new Error("Object name is required");
	}

	console.log(`Creating ${object.name}...`);

	const imports: Imports = new Map([
		["@/util/object", new Set(["LiquidObject"])],
	]);

	const filename = path.join(
		process.cwd(),
		"src",
		MANUAL_REVIEW_DIR,
		"objects",
		`${toKebabCase(object.name)}.ts`,
	);

	const exists = existsSync(filename);

	if (exists) {
		console.log(
			`${filename.split("src/_requires-manual-review/")[1]} already exists, skipping...`,
		);

		let code = readFileSync(filename, "utf-8");
		const importMatches = code.matchAll(PATTERN_IMPORTS);

		for (const match of importMatches) {
			const importNames = match[1].split(",").map((name) => name.trim());
			const importPath = match[2];
			addImport(imports, importPath, new Set(importNames));
		}

		code = code.replace(PATTERN_IMPORTS, "");

		return {
			imports,
			code,
			filename,
		};
	}

	const className = toPascalCase(object.name);
	const jsdoc = [
		"/**",
		` * ${object.description?.replaceAll("\n", "\n * ") ?? ""}`,
		"*/",
	].join("\n");
	const classDeclaration = `export class ${className} extends LiquidObject { ${EMPTY_LIQUID_OBJECT_FIELDS_PLACEHOLDER} }`;
	const defaultInstance = `export const ${toCamelCase(object.name)} = new ${className}();`;
	const code = [jsdoc, classDeclaration, "\n", defaultInstance].join("\n");

	writeFileSyncRecursive(filename, code);

	return {
		imports,
		code,
		filename,
	};
}

async function createObjectModuleClassFields(
	sourceUrl: URL,
	properties: NonNullable<LiquidObjectSpec>["properties"] = [],
	currentObjectName?: string,
) {
	const classFields: string[] = [];
	const imports: Imports = new Map();

	const createField = (
		name: string,
		value: string,
		description?: string | null,
		isGetter = false,
	) => {
		const propertyName = /\?/.test(name) ? `"${name}"` : name;
		const propertyDeclaration = isGetter
			? `@LiquidObject.property() get ${propertyName}() { return ${value}; }`
			: `@LiquidObject.property() ${propertyName} = ${value};`;

		return [
			"/**",
			` * ${description?.replaceAll("\n", "\n * ") ?? ""}`,
			"*/",
			propertyDeclaration,
		]
			.filter(Boolean)
			.join("\n");
	};

	properties.sort((a, b) => {
		const fieldNameA = a.detail;
		const fieldNameB = b.detail;
		return fieldNameA?.localeCompare(fieldNameB ?? "") ?? 0;
	});

	for (const property of properties) {
		if (!property.detail) {
			classFields.push(
				`/** "${property.detail || "empty detail"}" is invalid! */\n${JSON.stringify(property, null, 2)}`,
			);

			continue;
		}

		const fieldName = toCamelCase(property.detail);

		// property should be a primitive
		if (property.returnType && property.returnType in Primitive) {
			let value: string;

			if (property.isArray) {
				value = `new LiquidArray(() => new DataType(Primitive.${property.returnType}))`;

				addImport(imports, "@/util/dictionary", new Set(["LiquidArray"]));
				addImport(imports, "@/util/data", new Set(["DataType", "Primitive"]));
			} else if (property.isDictionary) {
				value = `new Dictionary(() => new DataType(Primitive.${property.returnType}))`;
				addImport(imports, "@/util/dictionary", new Set(["Dictionary"]));
				addImport(imports, "@/util/data", new Set(["DataType", "Primitive"]));
			} else {
				value = `new DataType(Primitive.${property.returnType})`;
				addImport(imports, "@/util/data", new Set(["DataType", "Primitive"]));
			}

			classFields.push(createField(fieldName, value, property.description));
			continue;
		}

		// property should be an object
		if (property.returnType && property.returnTypeDocLink) {
			const url = new URL(property.returnTypeDocLink, sourceUrl);
			if (!url.pathname.startsWith("/docs/api/liquid/objects")) {
				throw new Error(`${url} is not a valid object URL!`);
			}

			// const object = await scrapeObject(url);
			// const { code, filename } = await createObjectModule(object);

			const { code, filename } = await main(url);

			const matchClassName = code.match(
				/export class ([A-Z].+) extends LiquidObject/,
			);

			const className = matchClassName?.[1];

			if (!className) {
				throw new Error(`Could not find class name in ${filename}`);
			}

			const relativePath = filename.split("src/")[1];
			const importPath = `@/${relativePath.replace(extname(relativePath), "")}`;

			// Skip if this would be a self-import
			if (
				currentObjectName &&
				toKebabCase(currentObjectName) === toKebabCase(property.returnType)
			) {
				// Use the class directly without import for self-reference
			} else {
				addImport(imports, importPath, new Set([className]));
			}

			let value: string;
			let isSelfReference = false;

			// Check if this is a self-reference
			if (currentObjectName && className === toPascalCase(currentObjectName)) {
				isSelfReference = true;
			}

			if (property.isArray) {
				addImport(imports, "@/util/dictionary", new Set(["LiquidArray"]));
				value = `new LiquidArray(() => new ${className}())`;
			} else if (property.isDictionary) {
				addImport(imports, "@/util/dictionary", new Set(["Dictionary"]));
				value = `new Dictionary(() => new ${className}())`;
			} else {
				value = `new ${className}()`;
			}

			classFields.push(createField(fieldName, value, property.description, isSelfReference));
			continue;
		}

		addImport(imports, "@/util/unknown", new Set(["Unknown"]));
		addImport(imports, "@/util/dictionary", new Set(["Dictionary"]));
		classFields.push(
			createField(
				fieldName,
				`new Dictionary(() => new Unknown())`,
				property.description,
			),
		);
	}

	return { classFields, imports };
}

function addImport(target: Imports, path: string, imports: Set<string>) {
	if (!target.has(path)) {
		target.set(path, imports);
	}

	imports.forEach((name) => {
		// biome-ignore lint/style/noNonNullAssertion: we know the path exists
		target.get(path)!.add(name);
	});

	return target;
}

function mergeImports(...imports: Imports[]) {
	const mergedImports: Imports = new Map();

	for (const _import of imports) {
		for (const [path, importNames] of _import) {
			addImport(mergedImports, path, importNames);
		}
	}

	return mergedImports;
}

function importsToCode(imports: Imports) {
	return Array.from(imports)
		.map(
			([path, importNames]) =>
				`import { ${Array.from(importNames).join(", ")} } from "${path}"`,
		)
		.join("\n");
}

const inProgress = new Map<string, Promise<any>>();
const processed = new Map<
	string,
	{
		code: string;
		filename: string;
		imports: Imports;
	}
>();

async function main(url: URL): Promise<{
	code: string;
	filename: string;
	imports: Imports;
}> {
	const object = await scrapeObject(url);

	if (!object?.name) {
		throw new Error("Object name is required");
	}

	// Check if already fully processed
	if (processed.has(object.name)) {
		console.log(`${object.name} already processed, skipping...`);
		// biome-ignore lint/style/noNonNullAssertion: we know the object name exists
		return processed.get(object.name)!;
	}

	// Check if currently being processed (prevents infinite recursion)
	if (inProgress.has(object.name)) {
		console.log(
			`${object.name} is currently being processed, returning placeholder...`,
		);
		// Return a placeholder result for circular dependencies
		const filename = path.join(
			process.cwd(),
			"src",
			MANUAL_REVIEW_DIR,
			"objects",
			`${toKebabCase(object.name)}.ts`,
		);

		return {
			code: `export class ${toPascalCase(object.name)} extends LiquidObject { ${EMPTY_LIQUID_OBJECT_FIELDS_PLACEHOLDER} }`,
			filename,
			imports: new Map([["@/util/object", new Set(["LiquidObject"])]]),
		};
	}

	// Mark as in progress
	const processingPromise = (async () => {
		const {
			filename,
			code: moduleCode,
			imports: moduleImports,
		} = await createObjectModule(object);

		const { imports: moduleClassFieldsImports, classFields } =
			await createObjectModuleClassFields(
				url,
				object?.properties,
				object.name!,
			);

		const mergedImports = mergeImports(moduleImports, moduleClassFieldsImports);

		const codeWithClassFields = [
			importsToCode(mergedImports),
			"\n",
			moduleCode.replace(
				EMPTY_LIQUID_OBJECT_FIELDS_PLACEHOLDER,
				classFields.join("\n\n"),
			),
		].join("\n\n");

		const result = spawnSync(
			biomeBinary,
			[
				"check",
				"--stdin-file-path",
				"src/module.ts",
				"--write",
				"--config-path",
				path.resolve(process.cwd(), "biome.json"),
			],
			{
				input: codeWithClassFields,
				encoding: "utf-8",
			},
		);

		if (result.status !== 0) {
			console.log(result.stderr);
			throw new Error(result.stdout);
		}

		const finalResult = {
			...writeFileSyncRecursive(filename, result.stdout),
			imports: mergedImports,
		};

		// Mark as fully processed
		// biome-ignore lint/style/noNonNullAssertion: we know the object name exists
		processed.set(object.name!, finalResult);

		return finalResult;
	})();

	// Store the processing promise
	inProgress.set(object.name, processingPromise);

	try {
		const result = await processingPromise;
		return result;
	} finally {
		// Clean up the in-progress tracking
		inProgress.delete(object.name);
	}
}

const html = await fetch(
	"https://shopify.dev/docs/api/liquid/objects/additional_checkout_buttons",
).then((res) => res.text());

const dom = (() => {
	const virtualConsole = new VirtualConsole();
	virtualConsole.on("error", () => {
		// No-op to skip console errors.
	});
	return new JSDOM(html, { virtualConsole });
})();

const urls = Iterator.from(
	dom.window.document.querySelectorAll(
		"._ExpandableNav_w14dg_51._ExpandableNavOpen_w14dg_103 a",
	),
)
	.map((anchor) => (anchor as HTMLAnchorElement)?.href)
	.filter((href): href is string => href != null)
	.map((href) => new URL(href, "https://shopify.dev"))
	.toArray();

const results = await Promise.all(urls.map(main));

console.log(results);
