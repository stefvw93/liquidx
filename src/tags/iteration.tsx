import { LiquidArray } from "@/util/dictionary";
import type { LiquidObject } from "@/util/object";
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
 * Helper function to format for loop parameters
 */
function formatForParams(props: {
	limit?: number | string;
	offset?: number | string;
	reversed?: boolean;
}): string {
	const params: string[] = [];
	if (props.limit != null) {
		params.push(`limit: ${props.limit}`);
	}
	if (props.offset != null) {
		params.push(`offset: ${props.offset}`);
	}
	if (props.reversed) {
		params.push("reversed");
	}
	return params.join(", ");
}

/**
 * Stops a [for loop](https://shopify.dev/docs/api/liquid/tags/for) from iterating.
 */
export const Break = () => `{% break %}`;

/**
 * Causes a [for loop](https://shopify.dev/docs/api/liquid/tags/for) to skip to the next iteration.
 */
export const Continue = () => `{% continue %}`;

export function Cycle({
	children,
	values,
}: PropsWithChildren<{ values: string[] | Record<string, string[]> }>) {
	if (Array.isArray(values)) {
		return `{% cycle ${values.map((value) => `'${value}'`).join(", ")} %}${children}`;
	}

	return `{% cycle ${Object.entries(values)
		.map(
			([key, value]) =>
				`'${key}': ${value.map((value) => `'${value}'`).join(", ")}`,
		)
		.join(", ")} %}${children}`;
}

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
export function Paginate<ArrayType extends string>({
	array,
	by,
	children,
}: {
	array: ArrayType;
	by: number;
	children?: JSXNode | ((array: ArrayType) => JSXNode);
}): string {
	const normalizedChildren = [children].flat();
	const renderedChildren =
		normalizedChildren[0] instanceof Function
			? normalizedChildren[0](array)
			: normalizedChildren;

	return `{% paginate ${array} by ${by} %}${renderedChildren ?? ""}{% endpaginate %}`;
}

/**
 * Generates HTML table rows for every item in an array.
 * The tablerow tag must be wrapped in HTML <table> and </table> tags.
 */
export function TableRow<
	ArrayType extends string,
	VariableType extends string = "row_item",
>({
	array,
	variable,
	children,
}: {
	variable?: VariableType;
	array: ArrayType;
	children?: JSXNode | ((variable: VariableType, array: ArrayType) => JSXNode);
}) {
	const normalizedChildren = [children].flat();
	const safeVariable = (variable || "row_item") as VariableType;
	const renderedChildren =
		normalizedChildren[0] instanceof Function
			? normalizedChildren[0](safeVariable, array)
			: normalizedChildren;

	return `{% tablerow ${safeVariable} in ${array} %}${renderedChildren ?? ""}{% endtablerow %}`;
}
