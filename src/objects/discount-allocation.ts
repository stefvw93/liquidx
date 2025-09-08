import { DiscountApplication } from "@/objects/discount-application";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about how a discount affects an item.

*/
export class DiscountAllocation extends LiquidObject {
	/**
	 * The amount that the item is discounted by in the currency's subunit.
	 */
	@LiquidObject.property() get amount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The discount application that applies the discount to the item.
	 */
	@LiquidObject.property() get discountApplication() {
		return new DiscountApplication();
	}
}

export const discountAllocation = new DiscountAllocation();
