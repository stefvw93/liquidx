import { DiscountAllocation } from "@/objects/discount-allocation";
import { TaxLine } from "@/objects/tax-line";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about the shipping method for an order.

*/
export class ShippingMethod extends LiquidObject {
	/**
	 * The discount allocations that apply to the shipping method.
	 */
	@LiquidObject.property() get discountAllocations() {
		return new LiquidArray(() => new DiscountAllocation());
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the shipping method.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the shipping method.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The price of the shipping method in the currency's subunit, before discounts have been applied.
	 */
	@LiquidObject.property() get originalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price of the shipping method in the currency's subunit, after discounts have been applied.
	 * @deprecated Deprecated
	 *
	 * Deprecated because the price did not include order level discounts.
	 *
	 * The `shipping_line.price` property has been replaced by [`shipping_line.price_with_discounts`](https://shopify.dev/docs/api/liquid/objects/shipping_method#shipping_method-price_with_discounts).
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price of the shipping method in the currency's subunit, after discounts have been applied, including order level discounts.
	 */
	@LiquidObject.property() get priceWithDiscounts() {
		return new DataType(Primitive.number);
	}

	/**
	 * The tax lines for the shipping method.
	 */
	@LiquidObject.property() get taxLines() {
		return new LiquidArray(() => new TaxLine());
	}

	/**
	 * The title of the shipping method.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}
}

export const shippingMethod = new ShippingMethod();
