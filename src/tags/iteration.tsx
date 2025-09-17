import type { Address } from "@/objects/address";
import type { AllProducts } from "@/objects/all-products";
import type { Article } from "@/objects/article";
import type { Collections } from "@/objects/collections";
import type { Comment } from "@/objects/comment";
import type { Order } from "@/objects/order";
import type { Pages } from "@/objects/pages";
import type { Product } from "@/objects/product";
import type { Search } from "@/objects/search";
import type { Variant } from "@/objects/variant";
import { type Dictionary, LiquidArray } from "@/util/dictionary";
import type { LiquidObject, LiquidObjectPaginateTypeId } from "@/util/object";
import { normalizeChildren } from "@/util/renderer";
import type { JSXNode, PropsWithChildren } from "~/jsx-runtime";
import { LiquidComponent, LiquidTag } from "./_tag";

export function For<T extends LiquidObject>(props: {
	array: LiquidArray<T>;
	limit?: number | string;
	offset?: number | string;
	reversed?: boolean;
	children?:
		| JSXNode
		| JSXNode[]
		| ((variable: T, array: LiquidArray<T>) => JSXNode);
}): string;

export function For<Range extends `${number}..${number}`>(props: {
	range: Range;
	limit?: number | string;
	offset?: number | string;
	reversed?: boolean;
	children?: JSXNode | JSXNode[] | ((variable: "i") => JSXNode);
}): string;

export function For<
	Type extends string,
	Variable extends string = "array_item",
>(props: {
	array: Type;
	variable?: Variable;
	limit?: number | string;
	offset?: number | string;
	reversed?: boolean;
	children?:
		| JSXNode
		| JSXNode[]
		| ((variable: Variable, array: Type) => JSXNode);
}): string;

/**
 * Renders an expression for every item in an array.
 * You can do a maximum of 50 iterations with a for loop. If you need to iterate over more than 50 items, then use the [paginate tag](https://shopify.dev/docs/api/liquid/tags/paginate) to split the items over multiple pages.
 * @param array - The array to iterate over.
 * @param variable - The variable to iterate over.
 * @param limit - Limits the number of iterations.
 * @param offset - Starts iteration from a specific 1-based index.
 * @param reversed - Reverses the iteration order.
 * @param children - The expression to render for each item in the array.
 */
export function For(props: {
	array?: string | { toString(): string } | LiquidArray<LiquidObject>;
	range?: string;
	variable?: string;
	limit?: number | string;
	offset?: number | string;
	reversed?: boolean;
	children?:
		| JSXNode
		| ((
				variable: string | LiquidObject,
				array?: string | { toString(): string } | LiquidArray<LiquidObject>,
		  ) => JSXNode);
}): JSXNode {
	const normalizedChildren = normalizeChildren(props.children);
	let array: string;
	let variableName: string;
	let children: JSXNode = null;

	// handle liquid object
	if (props.array instanceof LiquidArray) {
		array = String(props.array);
		variableName = String(props.array.type);
		children =
			normalizedChildren[0] instanceof Function
				? normalizedChildren[0](props.array.type, props.array)
				: props.children;
	}

	// handle range pattern
	else if (props.range) {
		if (!/^[0-9]+\.\.[0-9]+$/.test(props.range)) {
			throw new Error(`Invalid range: ${props.range}`);
		}

		array = `(${props.range})`;
		variableName = "i";
		children =
			normalizedChildren[0] instanceof Function
				? normalizedChildren[0]("i")
				: props.children;
	}

	// handle custom
	else {
		array = String(props.array);
		variableName = props.variable || "array_item";
	}

	const Component = new LiquidComponent(
		LiquidTag.For,
		() => [
			`${variableName} in ${array}`,
			["limit", props.limit],
			["offset", props.offset],
			props.reversed ? "reversed" : null,
		],
		() => children,
	);

	return <Component />;
}

/**
 * Stops a [for loop](https://shopify.dev/docs/api/liquid/tags/for) from iterating.
 */
export const Break = new LiquidComponent(LiquidTag.Break, () => []);

/**
 * Causes a [for loop](https://shopify.dev/docs/api/liquid/tags/for) to skip to the next iteration.
 */
export const Continue = new LiquidComponent<Record<string, never>>(
	LiquidTag.Continue,
	() => [],
);

/**
 * Loops through a group of strings and outputs them one at a time for each iteration of a [`for` loop](https://shopify.dev/docs/api/liquid/tags/for).
 *
 * The `cycle` tag must be used inside a `for` loop.
 */
export const Cycle = new LiquidComponent<
	PropsWithChildren<{ values: string[] | Record<string, string[]> }>
>(LiquidTag.Cycle, (props) =>
	Array.isArray(props.values)
		? props.values
		: Object.entries(props.values).map(
				([key, values]) => `'${key}': ${values.join(", ")}`,
			),
);

/**
 * Splits an array's items across multiple pages.
 * Because for loops are limited to 50 iterations per page, you need to use the paginate tag to iterate over an array that has more than 50 items. The following arrays can be paginated:
 * - all_products
 * - article.comments
 * - blog.articles
 * - collections
 * - collection.products
 * - customer.addresses
 * - customer.orders
 * - pages
 * - product.variants
 * - search.results
 * - collection_list settings
 * - product_list settings
 */
export function Paginate<
	ArrayType extends LiquidObject & {
		[LiquidObjectPaginateTypeId]: unknown;
	},
>(props: {
	array: ArrayType;
	by: number;
	windowSize?: number;
	children?:
		| JSXNode
		| ((
				array: ArrayType extends LiquidArray<infer T>
					? LiquidArray<T>
					: ArrayType extends Dictionary<infer U>
						? LiquidArray<U>
						: never,
		  ) => JSXNode);
}): JSXNode {
	const Component = new LiquidComponent(LiquidTag.Paginate, () => [
		`${props.array} by ${props.by}`,
		["window_size", props.windowSize],
	]);

	const normalizedChildren = normalizeChildren(props.children);
	const children =
		normalizedChildren[0] instanceof Function
			? normalizedChildren[0](props.array)
			: props.children;

	return <Component>{children}</Component>;
}

export function TableRow<T extends LiquidObject>(props: {
	array: LiquidArray<T>;
	limit?: number | string;
	offset?: number | string;
	cols?: number | string;
	children?:
		| JSXNode
		| JSXNode[]
		| ((variable: T, array: LiquidArray<T>) => JSXNode);
}): string;

export function TableRow<Range extends `${number}..${number}`>(props: {
	range: Range;
	limit?: number | string;
	offset?: number | string;
	cols?: number | string;
	children?: JSXNode | JSXNode[] | ((variable: "i") => JSXNode);
}): string;

export function TableRow<
	Type extends string,
	Variable extends string = "row",
>(props: {
	array: Type;
	variable?: Variable;
	limit?: number | string;
	offset?: number | string;
	cols?: number | string;
	children?:
		| JSXNode
		| JSXNode[]
		| ((variable: Variable, array: Type) => JSXNode);
}): string;

/**
 * Generates HTML table rows for every item in an array.
 * The tablerow tag must be wrapped in HTML <table> and </table> tags.
 * @todo params & overloads
 */
export function TableRow(props: {
	array?: string | { toString(): string } | LiquidArray<LiquidObject>;
	range?: string;
	variable?: string;
	limit?: number | string;
	offset?: number | string;
	cols?: number | string;
	children?:
		| JSXNode
		| ((
				variable: string | LiquidObject,
				array?: string | { toString(): string } | LiquidArray<LiquidObject>,
		  ) => JSXNode);
}): JSXNode {
	const normalizedChildren = normalizeChildren(props.children);
	let array: string;
	let variableName: string;
	let children: JSXNode = null;

	// handle liquid object
	if (props.array instanceof LiquidArray) {
		array = String(props.array);
		variableName = String(props.array.type);
		children =
			normalizedChildren[0] instanceof Function
				? normalizedChildren[0](props.array.type, props.array)
				: props.children;
	}

	// handle range pattern
	else if (props.range) {
		if (!/^[0-9]+\.\.[0-9]+$/.test(props.range)) {
			throw new Error(`Invalid range: ${props.range}`);
		}

		array = `(${props.range})`;
		variableName = "i";
		children =
			normalizedChildren[0] instanceof Function
				? normalizedChildren[0]("i")
				: props.children;
	}

	// handle custom
	else {
		array = String(props.array);
		variableName = props.variable || "row";
	}

	const Component = new LiquidComponent(
		LiquidTag.TableRow,
		() => [
			`${variableName} in ${array}`,
			["cols", props.cols],
			["limit", props.limit],
			["offset", props.offset],
		],
		() => children,
	);

	return <Component />;
}
