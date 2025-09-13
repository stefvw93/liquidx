import { FRAGMENT, type JSXNode } from "~/jsx-runtime";

// biome-ignore lint/suspicious/noControlCharactersInRegex: needed for liquid
const ILLEGAL_ATTR_PATTERN = /[ "'>/= \u0000-\u001F\uFDD0-\uFDEF\uFFFF\uFFFE]/;

const VOID_ELEMENTS = [
	"area",
	"base",
	"br",
	"col",
	"command",
	"embed",
	"hr",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr",
];

class InvalidJSXError extends Error {
	constructor() {
		super("Invalid JSX");
	}
}

export function renderToString(node: JSXNode): string {
	if (node == null) {
		return "";
	}

	if (typeof node === "symbol") {
		throw new InvalidJSXError();
	}

	if (
		typeof node === "string" ||
		typeof node === "number" ||
		typeof node === "bigint" ||
		typeof node === "boolean"
	) {
		return String(node);
	}

	function renderNodes(nodes: Iterable<JSXNode>): string {
		return Array.from(nodes).map(renderToString).join("");
	}

	if (Symbol.iterator in node) {
		return renderNodes(node);
	}

	if ("type" in node) {
		const normalizedChildren =
			"children" in node.props
				? normalizeChildren(node.props.children as JSXNode | JSXNode[])
				: [];

		if (node.type === FRAGMENT) {
			return renderNodes(normalizedChildren);
		}

		if (typeof node.type === "string") {
			if (VOID_ELEMENTS.includes(node.type) && normalizedChildren.length) {
				throw new Error("Void elements cannot have children.");
			}

			const attributes = Object.entries(node.props)
				.map(([key, value]) => {
					if (ILLEGAL_ATTR_PATTERN.test(key)) {
						throw Error(`Illegal attribute name: ${key}`);
					}

					if (key === "children" || [null, undefined, false].includes(value)) {
						return "";
					}

					if (value === true) {
						return ` ${key}`;
					}

					return ` ${key}="${String(value).replace(/"/g, "&quot;")}"`;
				})
				.filter(Boolean)
				.join("");

			if (VOID_ELEMENTS.includes(node.type)) {
				return `<${node.type}${attributes}>`;
			} else {
				return `<${node.type}${attributes}>${renderNodes(normalizedChildren)}</${node.type}>`;
			}
		}

		if (node.type instanceof Function) {
			return renderToString(node.type(node.props));
		}

		throw new InvalidJSXError();
	}

	throw new InvalidJSXError();
}

export function normalizeChildren(children: JSXNode | JSXNode[]): JSXNode[] {
	if (children == null) {
		return [];
	}

	return [children].flat();
}
