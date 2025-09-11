/** biome-ignore-all lint/style/useLiteralEnumMembers: Using NaN as a number */

import { LiquidObject } from "./object";

export enum Primitive {
	/**
	 * Any series of characters, wrapped in single or double quotes.
	 *
	 * {@link https://shopify.dev/docs/api/liquid/basics#types}
	 */
	string = "string",

	/**
	 * Numeric values, including floats and integers.
	 *
	 * {@link https://shopify.dev/docs/api/liquid/basics#types}
	 */
	number = "number",

	/**
	 * A binary value, either true or false.
	 *
	 * {@link https://shopify.dev/docs/api/liquid/basics#types}
	 */
	boolean = "boolean",

	/**
	 * An undefined value.
	 *
	 * Tags or outputs that return nil don't print anything to the page. They are also treated as false.
	 *
	 * {@link https://shopify.dev/docs/api/liquid/basics#types}
	 */
	nil = "nil",

	/**
	 * A list of variables of any type.
	 *
	 * To access all of the items in an array, you can loop through each item in the array using a [for](https://shopify.dev/docs/api/liquid/tags/for) or [tablerow](https://shopify.dev/docs/api/liquid/tags/tablerow) tag.
	 *
	 * You can use square bracket [ ] notation to access a specific item in an array. Array indexing starts at zero.
	 *
	 * You can’t initialize arrays using only Liquid. You can, however, use the split filter to break a single string into an array of substrings.
	 *
	 * {@link https://shopify.dev/docs/api/liquid/basics#types}
	 */
	array = "array",

	/**
	 * An empty object is returned if you try to access an object that is defined, but has no value. For example a page or product that’s been deleted, or a setting with no value.
	 * You can compare an object with empty to check whether an object exists before you access any of its attributes.
	 *
	 * {@link https://shopify.dev/docs/api/liquid/basics#types}
	 */
	empty = "empty",
}

export class DataType<T extends Primitive> extends LiquidObject {
	constructor(public readonly type: T) {
		super();
	}

	toString() {
		return `{% liquid echo 'DataType:${this.type}' %}`;
	}
}
