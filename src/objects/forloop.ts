import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a parent [`for` loop](https://shopify.dev/docs/api/liquid/tags/for).

*/
export class Forloop extends LiquidObject {
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
	 * The parent `forloop` object.
	 */
	@LiquidObject.property() get parentloop() {
		return new Forloop();
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
}

export const forloop = new Forloop();
