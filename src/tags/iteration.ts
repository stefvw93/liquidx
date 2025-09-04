import type { JSXChildNode, PropsWithChildren } from "~/jsx-runtime";

/**
 * Renders an expression for every item in an array.
 * You can do a maximum of 50 iterations with a for loop. If you need to iterate over more than 50 items, then use the [paginate tag](https://shopify.dev/docs/api/liquid/tags/paginate) to split the items over multiple pages.
 * @param children - The expression to render for each item in the array.
 * @param variable - The variable to iterate over.
 * @param array - The array to iterate over.
 */

export function For<
	ArrayType extends string,
	VariableType extends string = "array_item",
>({
	array,
	variable,
	children,
}: {
	variable?: VariableType;
	array: ArrayType;
	children?:
		| JSXChildNode
		| ((variable: VariableType, array: ArrayType) => JSXChildNode);
}) {
	const normalizedChildren = [children].flat();
	const safeVariable = (variable || "array_item") as VariableType;
	const renderedChildren =
		normalizedChildren[0] instanceof Function
			? normalizedChildren[0](safeVariable, array)
			: normalizedChildren;

	return `{% for ${safeVariable} in ${array} %}${renderedChildren ?? ""}{% endfor %}`;
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
	children?: JSXChildNode | ((array: ArrayType) => JSXChildNode);
}): string {
	const normalizedChildren = [children].flat();
	const renderedChildren =
		normalizedChildren[0] instanceof Function
			? normalizedChildren[0](array)
			: normalizedChildren;

	return `{% paginate ${array} by ${by} %}${renderedChildren ?? ""}{% endpaginate %}`;
}
