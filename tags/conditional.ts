import type { PropsWithChildren } from "../jsx-runtime";

/**
 * Renders a specific expression depending on the value of a specific variable.
 */
export function Case<T>({
	children,
	variable,
}: PropsWithChildren<{ variable: T }>) {
	return `{% case ${variable} %}${children}{% endcase %}`;
}

export function When<T extends unknown[]>({
	children,
	values,
}: PropsWithChildren<{ values: T }>) {
	return `{% when ${values.join(", ")} %}${children}`;
}

/**
 * Allows you to specify a default expression to execute when no other condition is met.
 * You can use the else tag with the following tags:
 * - case
 * - if
 * - unless
 */
export function Else({ children }: PropsWithChildren) {
	return `{% else %}${children}`;
}

/**
 * Renders an expression if a specific condition is true.
 */
export function If({
	children,
	condition,
}: PropsWithChildren<{ condition: unknown }>) {
	return `{% if ${condition} %}${children}{% endif %}`;
}

/**
 * You can use the elsif tag to check for multiple conditions.
 */
export function Elsif({
	children,
	condition,
}: PropsWithChildren<{ condition: unknown }>) {
	return `{% elsif ${condition} %}${children}`;
}

/**
 * Renders an expression unless a specific condition is true.
 */
export function Unless({
	children,
	condition,
}: PropsWithChildren<{ condition: unknown }>) {
	return `{% unless ${condition} %}${children}{% endunless %}`;
}
