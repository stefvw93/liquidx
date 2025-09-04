import type { PropsWithChildren } from "../jsx-runtime";

/**
 * Renders an expression for every item in an array.
 * You can do a maximum of 50 iterations with a for loop. If you need to iterate over more than 50 items, then use the [paginate tag](https://shopify.dev/docs/api/liquid/tags/paginate) to split the items over multiple pages.
 * @param children - The expression to render for each item in the array.
 * @param variable - The variable to iterate over.
 * @param array - The array to iterate over.
 */
export function For({
	children,
	variable,
	array,
}: PropsWithChildren<{ variable: string; array: string }>) {
	return `{% for ${variable} in ${array} %}${children}{% endfor %}`;
}

/**
 * Stops a [for loop](https://shopify.dev/docs/api/liquid/tags/for) from iterating.
 */
export function Break() {
	return `{% break %}`;
}
