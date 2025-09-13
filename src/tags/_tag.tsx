/** biome-ignore-all lint/correctness/noConstructorReturn: - */
/** biome-ignore-all lint/correctness/noUnreachableSuper: - */
/** biome-ignore-all lint/style/useShorthandFunctionType: - */
/** biome-ignore-all lint/suspicious/noTsIgnore: - */
/** biome-ignore-all lint/suspicious/noUnsafeDeclarationMerging: - */

import type { JSXNode, PropsWithChildren } from "~/jsx-runtime";

export enum LiquidTag {
	// conditional
	Case = "case",
	Else = "else",
	If = "if",
	ElseIf = "elsif",
	Unless = "unless",
	When = "when",

	// html
	Form = "form",
	Style = "style",

	// iteration
	Break = "break",
	Continue = "continue",
	Cycle = "cycle",
	For = "for",
	Paginate = "paginate",
	TableRow = "tablerow",
	// Else = "else",

	// syntax
	Comment = "comment",
	Doc = "doc",
	Echo = "echo",
	Liquid = "liquid",
	Raw = "raw",

	// theme
	ContentFor = "content_for",
	Include = "include",
	Javascript = "javascript",
	Layout = "layout",
	Render = "render",
	Section = "section",
	Sections = "sections",
	Stylesheet = "stylesheet",

	// variable
	Assign = "assign",
	Capture = "capture",
	Decrement = "decrement",
	Increment = "increment",
}

export const LIQUID_VOID_TAGS = [
	LiquidTag.Break,
	LiquidTag.ContentFor,
	LiquidTag.Continue,
	LiquidTag.Cycle,
	LiquidTag.Echo,
	LiquidTag.Else,
	LiquidTag.ElseIf,
	LiquidTag.Include,
	LiquidTag.Layout,
	LiquidTag.Liquid,
	LiquidTag.Render,
	LiquidTag.Section,
	LiquidTag.Sections,
	LiquidTag.When,
];

class Callable<T extends object> extends Function {
	// @ts-ignore
	constructor(fn: (props: T) => JSXNode) {
		return Object.setPrototypeOf(fn, new.target.prototype);
	}
}

export type LiquidTagParam =
	| string
	| readonly [string, string | number | null | undefined]
	| null
	| undefined;

export interface LiquidComponent<T extends object = object> {
	(props: T): JSXNode;
}
export class LiquidComponent<T extends object = object> extends Callable<T> {
	#createParams: (props: T) => LiquidTagParam[] = () => [];

	constructor(
		public readonly tag: LiquidTag,
		params: (props: T) => LiquidTagParam[],
		component: (props: T) => JSXNode = (props) => {
			return "children" in props ? (props.children as JSXNode) : null;
		},
	) {
		super(component);
		this.#createParams = params;
	}

	open(props: T) {
		return `{% ${this.tag} ${this.#createParams(props)
			.map((param, index, array) => {
				if (param == null) return "";

				if (Array.isArray(param) && !!param[0] && param[1] != null) {
					return `${param[0]}: ${param[1]}${index === array.length - 1 ? "" : ","}`;
				}

				return String(param);
			})
			.join(" ")} %}`;
	}

	close() {
		return LIQUID_VOID_TAGS.includes(this.tag) ? "" : `{% end${this.tag} %}`;
	}
}
