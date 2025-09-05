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
		tag += `, ${key}: '${String(value).replace(/"/g, "&quot;")}'`;
	}

	return `{% ${tag} %}`;
}
