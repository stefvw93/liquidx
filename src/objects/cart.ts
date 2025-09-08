import { Currency } from "@/objects/currency";
import { Discount } from "@/objects/discount";
import { DiscountApplication } from "@/objects/discount-application";
import { LineItem } from "@/objects/line-item";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A customer’s cart.

*/
export class Cart extends LiquidObject {
	/**
	 * Additional attributes entered by the customer with the cart.
	 */
	@LiquidObject.property() get attributes() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The cart-specific discount applications for the cart.
	 */
	@LiquidObject.property() get cartLevelDiscountApplications() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The amount that the customer will be charged at checkout in the currency's subunit.
	 */
	@LiquidObject.property() get checkoutChargeAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The currency of the cart.
	 */
	@LiquidObject.property() get currency() {
		return new Dictionary(() => new Currency());
	}

	/**
	 * The discount applications for the cart.
	 */
	@LiquidObject.property() get discountApplications() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The discounts applied to the cart.
	 * @deprecated Deprecated
	 *
	 * Deprecated because not all discount types and details are available.
	 *
	 * The `cart.discounts` property has been replaced by [`cart.discount_applications`](https://shopify.dev/docs/api/liquid/objects/cart#cart-discount_applications).
	 */
	@LiquidObject.property() get discounts() {
		return new LiquidArray(() => new Discount());
	}

	/**
	 * Returns `true` if duties are included in the prices of products in the cart. Returns `false` if not.
	 */
	@LiquidObject.property() get dutiesIncluded() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if there are no items in the cart. Return's `false` if there are.
	 */
	@LiquidObject.property() get "empty?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The number of items in the cart.
	 */
	@LiquidObject.property() get itemCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The line items in the cart.
	 */
	@LiquidObject.property() get items() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The total price of all of the items in the cart in the currency's subunit, after any line item discounts. This doesn't include taxes (unless taxes are included in the prices), cart discounts, or shipping costs.
	 */
	@LiquidObject.property() get itemsSubtotalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * Additional information captured with the cart.
	 */
	@LiquidObject.property() get note() {
		return new DataType(Primitive.string);
	}

	/**
	 * The total price of all of the items in the cart in the currency's subunit, before discounts have been applied.
	 */
	@LiquidObject.property() get originalTotalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if any of the products in the cart require shipping. Returns `false` if not.
	 */
	@LiquidObject.property() get requiresShipping() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if taxes are included in the prices of products in the cart. Returns `false` if not.
	 */
	@LiquidObject.property() get taxesIncluded() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The total amount of all discounts (the amount saved) for the cart in the currency's subunit.
	 */
	@LiquidObject.property() get totalDiscount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total price of all of the items in the cart in the currency's subunit, after discounts have been applied.
	 */
	@LiquidObject.property() get totalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total weight of all of the items in the cart in grams.
	 */
	@LiquidObject.property() get totalWeight() {
		return new DataType(Primitive.number);
	}
}

export const cart = new Cart();
