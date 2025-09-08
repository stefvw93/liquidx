import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A discount applied to a cart, line item, or order.
 * @deprecated Deprecated because not all discount types and details are captured.
 *
 * The `discount` object has been replaced by the [`discount_allocation`](https://shopify.dev/docs/api/liquid/objects/discount_allocation) and [`discount_application`](https://shopify.dev/docs/api/liquid/objects/discount_application) objects.
 */
export class Discount extends LiquidObject {
	/**
	 * The amount of the discount in the currency's subunit.
	 */
	@LiquidObject.property() get amount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The customer-facing name of the discount.
	 */
	@LiquidObject.property() get code() {
		return new DataType(Primitive.string);
	}

	/**
	 * The amount of the discount as a negative value, in the currency's subunit.
	 */
	@LiquidObject.property() get savings() {
		return new DataType(Primitive.number);
	}

	/**
	 * The customer-facing name of the discount.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The amount of the discount in the currency's subunit.
	 */
	@LiquidObject.property() get totalAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The amount of the discount as a negative value, in the currency's subunit.
	 */
	@LiquidObject.property() get totalSavings() {
		return new DataType(Primitive.number);
	}

	/**
	 * The type of the discount.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}
}

export const discount = new Discount();
