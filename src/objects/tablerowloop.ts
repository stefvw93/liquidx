import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a parent [`tablerow` loop](https://shopify.dev/docs/api/liquid/tags/tablerow).

*/
export class Tablerowloop extends LiquidObject {
	/**
	 * The 1-based index of the current column.
	 */
	@LiquidObject.property() get col() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the current column is the first in the row. Returns `false` if not.
	 */
	@LiquidObject.property() get colFirst() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the current column is the last in the row. Returns `false` if not.
	 */
	@LiquidObject.property() get colLast() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The 0-based index of the current column.
	 */
	@LiquidObject.property() get col0() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the current iteration is the first. Returns `false` if not.
	 */
	@LiquidObject.property() get first() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The 1-based index of the current iteration.
	 */
	@LiquidObject.property() get index() {
		return new DataType(Primitive.number);
	}

	/**
	 * The 0-based index of the current iteration.
	 */
	@LiquidObject.property() get index0() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the current iteration is the last. Returns `false` if not.
	 */
	@LiquidObject.property() get last() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The total number of iterations in the loop.
	 */
	@LiquidObject.property() get length() {
		return new DataType(Primitive.number);
	}

	/**
	 * The 1-based index of the current iteration, in reverse order.
	 */
	@LiquidObject.property() get rindex() {
		return new DataType(Primitive.number);
	}

	/**
	 * The 0-based index of the current iteration, in reverse order.
	 */
	@LiquidObject.property() get rindex0() {
		return new DataType(Primitive.number);
	}

	/**
	 * The 1-based index of current row.
	 */
	@LiquidObject.property() get row() {
		return new DataType(Primitive.number);
	}
}

export const tablerowloop = new Tablerowloop();
