import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { JSDOM, VirtualConsole } from "jsdom";
import TurndownService from "turndown";
import { Primitive } from "@/util/data";

const biomeBinary = path.join(
	process.cwd(),
	"node_modules/@biomejs/biome",
	"bin/biome",
);

const turndown = new TurndownService();
const inputUrl = new URL("https://shopify.dev/docs/api/liquid/objects/cart");
const inProgress = new Map<string, Promise<any>>();

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

function writeFileSyncRecursive(filename: string, content: string) {
	// -- normalize path separator to '/' instead of path.sep,
	// -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
	let filepath = filename.replace(/\\/g, "/");

	// -- preparation to allow absolute paths as well
	let root = "";
	if (filepath[0] === "/") {
		root = "/";
		filepath = filepath.slice(1);
	} else if (filepath[1] === ":") {
		root = filepath.slice(0, 3); // c:\
		filepath = filepath.slice(3);
	}

	// -- create folders all the way down
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

	// -- write file
	writeFileSync(root + filepath, content, "utf-8");
}

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

	const description =
		dom.window.document.body.querySelector(`h1 + .markdown`)?.innerHTML;

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
			const returnTypeDocLink = (
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

async function createObjectModule(url: URL) {
	const object = await scrapeObject(url);

	if (!object?.name) {
		console.error(`${url} is not a valid object URL!`);
		return;
	}

	const imports = new Set([
		`import { LiquidObject } from "@/util/object";`,
		`import { Dictionary, LiquidArray } from "@/util/dictionary";`,
		`import { DataType, Primitive } from "@/util/data"`,
	]);

	const classFields: string[] = [];

	for (const [index, property] of object.properties.entries()) {
		if (!property.detail) {
			console.error(`${property.detail} is invalid!`);
			continue;
		}

		let fieldName = lowerFirst(toPascalCase(property.detail));
		let value = `(() => { throw new Error("Unknown type for '${property.detail}'") })()`;

		if (/\?/.test(fieldName)) {
			fieldName = `"${fieldName}"`;
		}

		if (property.returnType && property.returnType in Primitive) {
			value = `new DataType(Primitive.${property.returnType})`;
		} else if (
			property.isDictionary &&
			!property.returnType &&
			property.detail === "metafields"
		) {
			imports.add(`import { Metafield } from "@/objects/metafield"`);
			value = `new Dictionary(() => new Metafield())`;
		} else if (property.isDictionary && !property.returnType) {
			value = `new Dictionary(() => { throw new Error("Unknown dictionary type for '${property.detail}'") })`;
		} else if (property.returnType) {
			console.error("MUST BE AN OBJECT WE SHOULD CREATE OR HAVE", property);
			const exists = existsSync(
				path.join(
					process.cwd(),
					"src",
					"objects",
					toKebabCase(property.returnType),
				),
			);

			const existsUnstable = existsSync(
				path.join(
					process.cwd(),
					"src",
					"_requires-manual-review",
					"objects",
					toKebabCase(property.returnType),
				),
			);

			if (!exists && !existsUnstable && property.returnTypeDocLink) {
				console.warn(`${property.returnType} does not exist!`);
				console.log(
					`Creating new LiquidObject for "${property.returnType}"...`,
				);

				const url = new URL(property.returnTypeDocLink, inputUrl);

				if (inProgress.has(url.toString())) {
					console.log(`Waiting for promise... ${url}`);
					await inProgress.get(url.toString());
				} else {
					console.log("Creating promise...");
					const promise = createObjectModule(url).then(() => {
						inProgress.delete(url.toString());
					});
					inProgress.set(url.toString(), promise);
					await promise;
				}

				console.log("promise result", url.toString());
				console.log(
					"add import",
					`import { ${toPascalCase(property.returnType)} } from "@/_requires-manual-review/objects/${toKebabCase(property.returnType)}"`,
				);
				imports.add(
					`import { ${toPascalCase(property.returnType)} } from "@/_requires-manual-review/objects/${toKebabCase(property.returnType)}"`,
				);
			} else if (exists) {
				imports.add(
					`import { ${toPascalCase(property.returnType)} } from "@/objects/${toKebabCase(property.returnType)}"`,
				);
			} else if (existsUnstable) {
				imports.add(
					`import { ${toPascalCase(property.returnType)} } from "@/_requires-manual-review/objects/${toKebabCase(property.returnType)}"`,
				);
			} else {
				console.error(property);
				throw new Error(`Could not process ${property.detail}`);
			}
		} else {
			console.error(property);
			throw new Error(`Could not process ${property.detail}`);
		}

		const code = `/**
			 * ${property.description}
			 */
			@LiquidObject.property() ${fieldName} = ${value};
			`;

		classFields.push(code);
	}

	const classDeclaration = `class ${toPascalCase(object.name)} extends LiquidObject { ${classFields.join("\n\n")} }`;
	const defaultInstance = `export const ${lowerFirst(toPascalCase(object.name))} = new ${toPascalCase(object.name)}();`;

	const code = [
		[...imports].join("\n"),
		classDeclaration,
		defaultInstance,
	].join("\n\n");

	const result = spawnSync(
		biomeBinary,
		["check", "--stdin-file-path", "src/module.ts", "--write"],
		{
			input: code,
			encoding: "utf-8",
		},
	);

	if (result.status !== 0) {
		throw new Error(String(result.output));
	}

	writeFileSyncRecursive(
		path.join(
			process.cwd(),
			"src",
			"_requires-manual-review",
			"objects",
			`${toKebabCase(object.name)}.ts`,
		),
		result.stdout,
	);

	return result.stdout;
}

await createObjectModule(inputUrl);
