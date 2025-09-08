import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The per-unit price of a variant when purchasing the minimum quantity or more.

*/
export class QuantityPriceBreak extends LiquidObject {
	/**
	 * The minimum quantity required to qualify for the price break.
	 */
	@LiquidObject.property() get minimumQuantity() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price for the quantity price break once the minimum quantity is met.
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}
}

export const quantityPriceBreak = new QuantityPriceBreak();
