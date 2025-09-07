import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

class DiscountApplication extends LiquidObject {
	/**
	 * The selection method for line items or shipping lines to be discounted.
	 */
	@LiquidObject.property() targetSelection = new DataType(Primitive.string);

	/**
	 * The type of item that the discount applies to.
	 */
	@LiquidObject.property() targetType = new DataType(Primitive.string);

	/**
	 * The customer-facing name of the discount.
	 */
	@LiquidObject.property() title = new DataType(Primitive.string);

	/**
	 * The total amount of the discount in the currency's subunit.
	 */
	@LiquidObject.property() totalAllocatedAmount = new DataType(
		Primitive.number,
	);

	/**
	 * The type of the discount.
	 */
	@LiquidObject.property() type = new DataType(Primitive.string);

	/**
	 * The value of the discount.
	 */
	@LiquidObject.property() value = new DataType(Primitive.number);

	/**
	 * The value type of the discount.
	 */
	@LiquidObject.property() valueType = new DataType(Primitive.string);
}

export const discountApplication = new DiscountApplication();
