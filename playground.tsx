import { Currency } from "@/_requires-manual-review/objects/currency";
import { Discount } from "@/_requires-manual-review/objects/discount";
import { DiscountApplication } from "@/_requires-manual-review/objects/discount-application";
import { LineItem } from "@/_requires-manual-review/objects/line-item";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

export class Cart extends LiquidObject {
	/**
	 * The cart-specific discount applications for the cart.
	 */
	@LiquidObject.property() cartLevelDiscountApplications = new LiquidArray(
		() => new DiscountApplication(),
	);

	/**
	 * The amount that the customer will be charged at checkout in the currency's subunit.
	 */
	@LiquidObject.property() checkoutChargeAmount = new DataType(
		Primitive.number,
	);

	/**
	 * The currency of the cart.
	 */
	@LiquidObject.property() currency = new Dictionary(() => new Currency());

	/**
	 * The discount applications for the cart.
	 */
	@LiquidObject.property() discountApplications = new LiquidArray(
		() => new DiscountApplication(),
	);

	/**
	 * Returns `true` if duties are included in the prices of products in the cart. Returns `false` if not.
	 */
	@LiquidObject.property() dutiesIncluded = new DataType(Primitive.boolean);

	/**
	 * Returns `true` if there are no items in the cart. Return's `false` if there are.
	 */
	@LiquidObject.property() "empty?" = new DataType(Primitive.boolean);

	/**
	 * The number of items in the cart.
	 */
	@LiquidObject.property() itemCount = new DataType(Primitive.number);

	/**
	 * The line items in the cart.
	 */
	@LiquidObject.property() items = new LiquidArray(() => new LineItem());

	/**
	 * The total price of all of the items in the cart in the currency's subunit, after any line item discounts. This doesn't include taxes (unless taxes are included in the prices), cart discounts, or shipping costs.
	 */
	@LiquidObject.property() itemsSubtotalPrice = new DataType(Primitive.number);

	/**
	 * Additional information captured with the cart.
	 */
	@LiquidObject.property() note = new DataType(Primitive.string);

	/**
	 * The total price of all of the items in the cart in the currency's subunit, before discounts have been applied.
	 */
	@LiquidObject.property() originalTotalPrice = new DataType(Primitive.number);

	/**
	 * Returns `true` if any of the products in the cart require shipping. Returns `false` if not.
	 */
	@LiquidObject.property() requiresShipping = new DataType(Primitive.boolean);

	/**
	 * Returns `true` if taxes are included in the prices of products in the cart. Returns `false` if not.
	 */
	@LiquidObject.property() taxesIncluded = new DataType(Primitive.boolean);

	/**
	 * The total amount of all discounts (the amount saved) for the cart in the currency's subunit.
	 */
	@LiquidObject.property() totalDiscount = new DataType(Primitive.number);

	/**
	 * The total price of all of the items in the cart in the currency's subunit, after discounts have been applied.
	 */
	@LiquidObject.property() totalPrice = new DataType(Primitive.number);

	/**
	 * The total weight of all of the items in the cart in grams.
	 */
	@LiquidObject.property() totalWeight = new DataType(Primitive.number);

	/**
	 * The discounts applied to the cart.
	 */
	@LiquidObject.property() discounts = new LiquidArray(() => new Discount());
}

export const cart = new Cart();
