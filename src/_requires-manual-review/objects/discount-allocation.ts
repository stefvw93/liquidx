import { DiscountApplication } from "@/_requires-manual-review/objects/discount-application";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

export class DiscountAllocation extends LiquidObject {
	/**
	 * The amount that the item is discounted by in the currency's subunit.
	 */
	@LiquidObject.property() amount = new DataType(Primitive.number);

	/**
	 * The discount application that applies the discount to the item.
	 */
	@LiquidObject.property() discountApplication = new DiscountApplication();
}

export const discountAllocation = new DiscountAllocation();
