import type { JSXChildNode, PropsWithChildren } from "~/jsx-runtime";

/**
 * Creates a designated area in your [theme](https://shopify.dev/themes/architecture) where blocks can be rendered.
 * The content_for tag requires a type parameter to differentiate between rendering a number of theme blocks ('blocks') and a single static block ('block').
 */
export function Content(props: { _for: "blocks" }): string;

export function Content(props: {
	_for: "block";
	type: string;
	id: string;
	[attribute: string]: unknown;
}): string;

export function Content({
	_for,
	type,
	id,
	children,
	...rest
}: {
	_for: "blocks" | "block";
	type?: string;
	id?: string;
	[attribute: string]: unknown;
}) {
	let tag = `content_for '${_for}'`;

	if (type) {
		tag += `, type: '${type}'`;
	}

	if (id) {
		tag += `, id: '${id}'`;
	}

	for (const [key, value] of Object.entries(rest)) {
		tag += `, ${key}: ${value}`;
	}

	return `{% ${tag} %}`;
}

/**
 * JavaScript code included in [section](https://shopify.dev/storefronts/themes/architecture/sections), [block](https://shopify.dev/storefronts/themes/architecture/blocks) and [snippet](https://shopify.dev/storefronts/themes/architecture/snippets) files.
 * Each section, block or snippet can have only one {% javascript %} tag.
 * To learn more about how JavaScript that's defined between the javascript tags is loaded and run, refer to the documentation for [javascript tags](https://shopify.dev/storefronts/themes/best-practices/javascript-and-stylesheet-tags#javascript).
 */
export function JavaScript({ children }: PropsWithChildren) {
	return `{% javascript %}${children}{% endjavascript %}`;
}

/**
 * Specify which [layout](https://shopify.dev/themes/architecture/layouts) to use.
 */
export function Layout({ name }: { name?: string }) {
	return `{% layout ${name ? `'${name}'` : "none"} %}`;
}

/**
 * Renders a snippet or app block.
 * Inside snippets and app blocks, you can't directly access variables that are created outside of the snippet or app block. However, you can specify variables as parameters to pass outside variables to snippets.
 * While you can't directly access created variables, you can access global objects, as well as any objects that are directly accessible outside the snippet or app block. For example, a snippet or app block inside the product template can access the product object, and a snippet or app block inside a section can access the section object.
 * Outside a snippet or app block, you can't access variables created inside the snippet or app block.
 */

export function Render<
	ArrayType extends string,
	VariableType extends string = "render_item",
>(props: {
	filename: string;
	variable?: VariableType;
	array: ArrayType;
	children?:
		| JSXChildNode
		| ((variable: VariableType, array: ArrayType) => JSXChildNode);
	[attribute: string]: unknown;
}): string;

export function Render(props: {
	filename: string;
	[attribute: string]: unknown;
}): string;

export function Render(props: {
	filename: string;
	with: string | { object: string; as: string };
	[attribute: string]: unknown;
}): string;

export function Render({
	filename,
	array,
	variable,
	with: liquidWith,
	children,
	...attributes
}: {
	filename: string;
	array?: string;
	variable?: string;
	/**
	 * You can pass a single object to a snippet using the with parameter. You can also supply an optional as parameter to specify a custom name to reference the object inside the snippet. If you don't use the as parameter to specify a custom name, then you can reference the object using the snippet filename.
	 */
	with?: string | { object: string; as: string };
	children?: JSXChildNode | ((variable: string, array: string) => JSXChildNode);
	[attribute: string]: unknown;
}) {
	let tag = `render '${filename}'`;

	if (array) {
		tag += ` for ${array} as ${variable || "render_item"}`;
	}

	// {% render 'filename' with object as name %}
	if (liquidWith) {
		if (
			typeof liquidWith === "object" &&
			"object" in liquidWith &&
			"as" in liquidWith
		) {
			tag += ` with ${liquidWith.object} as ${liquidWith.as}`;
		} else {
			tag += ` with ${liquidWith}`;
		}
	}

	for (const [key, value] of Object.entries(attributes)) {
		tag += `, ${key}: ${value}`;
	}

	return `{% ${tag} %}`;
}

/**
 * Renders a [section](https://shopify.dev/themes/architecture/sections).
 * Rendering a section with the section tag renders a section statically. To learn more about sections and how to use them in your theme, refer to [Render a section](https://shopify.dev/themes/architecture/sections#render-a-section).
 */
export function Section({ name }: { name: string }) {
	return `{% section ${name} %}`;
}

/**
 * Renders a [section group](https://shopify.dev/themes/architecture/section-groups).
 * Use this tag to render section groups as part of the theme's [layout](https://shopify.dev/themes/architecture/layouts) content. Place the sections tag where you want to render it in the layout.
 * To learn more about section groups and how to use them in your theme, refer to [Section groups](https://shopify.dev/themes/architecture/section-groups#usage).
 */
export function Sections({ name }: { name: string }) {
	return `{% sections ${name} %}`;
}

/**
 * CSS styles included in [section](https://shopify.dev/storefronts/themes/architecture/sections), [block](https://shopify.dev/storefronts/themes/architecture/blocks), and [snippet](https://shopify.dev/storefronts/themes/architecture/snippets) files.
 * Each section, block or snippet can have only one {% stylesheet %} tag.
 * To learn more about how CSS that's defined between the stylesheet tags is loaded and run, refer to the documentation for [stylesheet tags](https://shopify.dev/storefronts/themes/best-practices/javascript-and-stylesheet-tags#stylesheet).
 */
export function Stylesheet({ children }: PropsWithChildren) {
	return `{% stylesheet %}${children}{% endstylesheet %}`;
}
