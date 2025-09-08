import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A variant order quantity rule.

*/
export class QuantityRule extends LiquidObject {
	/**
	 * The number the order quantity can be incremented by. The default value is `1`.
	 */
	@LiquidObject.property() get increment() {
		return new DataType(Primitive.number);
	}

	/**
	 * The maximum order quantity.
	 */
	@LiquidObject.property() get max() {
		return new DataType(Primitive.number);
	}

	/**
	 * The minimum order quantity. The default value is `1`.
	 */
	@LiquidObject.property() get min() {
		return new DataType(Primitive.number);
	}
}

export const quantityRule = new QuantityRule();
