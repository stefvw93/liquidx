export function css(
	strings: TemplateStringsArray,
	...values: unknown[]
): string {
	return strings
		.map((string, index) => {
			const value = values[index];
			return string + (value ? ` ${value}` : "");
		})
		.join("");
}
