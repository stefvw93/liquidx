import type * as HTMLTypes from "html-jsx";
import type { LiquidComponent } from "@/tags/_tag";

export const FRAGMENT = Symbol("liquidx/fragment");

export type JSXType =
	| typeof FRAGMENT
	| LiquidComponent
	| string
	| ((props: object) => JSXNode);

export type JSXNode =
	// biome-ignore lint/suspicious/noConfusingVoidType: convenient way to represent void nodes
	| void
	| null
	| undefined
	| string
	| number
	| bigint
	| boolean
	| Iterable<JSXNode>
	| { toString(): string }
	| { type: JSXType; props: object };

export type PropsWithChildren<T = object> = T & {
	children?: JSXNode | JSXNode[];
};

export function jsx(
	type: JSXType,
	props: PropsWithChildren<{ [key: string]: unknown }>,
): JSXNode {
	return { type, props };
}

export const jsxs: typeof jsx = jsx;

export function Fragment({ children }: { children?: JSXNode[] }): JSXNode {
	return jsx(FRAGMENT, { children });
}

// this declaration allows us to augment JSX interfaces
declare module "html-jsx" {
	// biome-ignore lint/correctness/noUnusedVariables: needed for jsx
	interface DOMAttributes<T> extends JSX.IntrinsicAttributes {
		children?: JSXNode;
	}
}

// this introduces our JSX definitions into the global scope
declare global {
	namespace JSX {
		type Element = JSXNode;

		interface IntrinsicElements extends HTMLTypes.IntrinsicElements {
			[k: string]: unknown;
		}

		// here we can add attributes for all the elements
		interface IntrinsicAttributes {}

		interface HTMLAttributes<T> extends HTMLTypes.HTMLAttributes<T> {}
		interface SVGAttributes<T> extends HTMLTypes.SVGAttributes<T> {}
		interface DOMAttributes<T> extends HTMLTypes.DOMAttributes<T> {}
	}
}
