import path from "node:path";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

const pathToBiome = "path/to/package";
const pathToBinary = path.join(pathToBiome, "bin/biome");

const turndown = new TurndownService();
const url = "https://shopify.dev/docs/api/liquid/objects/article";

async function scrapeObject(url: string) {
	const dom = await fetch(url)
		.then((res) => res.text())
		.then((html) => new JSDOM(html));

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
			const description = element.querySelector(
				`[class^="_PropertyDescription"] .markdown`,
			)?.innerHTML;

			return {
				detail,
				returnType,
				description: description ? turndown.turndown(description) : description,
			};
		})
		.toArray();

	return { name, description, properties };
}

async function createObjectModule(url: string) {
	const object = await scrapeObject(url);

	if (!object.name) {
		throw new Error("Object name not found");
	}

	const module = `
    import { LiquidObject } from "@/util/object";

    class ${toPascalCase(object.name)} extends LiquidObject {}
    `;

	return module;
}

console.log(createObjectModule(url));
function toPascalCase(str: string): string {
	return str
		.split(/[-_\s]+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join("");
}
