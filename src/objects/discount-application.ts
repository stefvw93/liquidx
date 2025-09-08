import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about the intent of a discount.

*/
export class DiscountApplication extends LiquidObject {
	/**
	 * The selection method for line items or shipping lines to be discounted.
	 */
	@LiquidObject.property() get targetSelection() {
		return new DataType(Primitive.string);
	}

	/**
	 * The type of item that the discount applies to.
	 */
	@LiquidObject.property() get targetType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The customer-facing name of the discount.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The total amount of the discount in the currency's subunit.
	 */
	@LiquidObject.property() get totalAllocatedAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The type of the discount.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the discount.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.number);
	}

	/**
	 * The value type of the discount.
	 */
	@LiquidObject.property() get valueType() {
		return new DataType(Primitive.string);
	}
}

export const discountApplication = new DiscountApplication();
