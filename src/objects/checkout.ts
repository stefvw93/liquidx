import { Address } from "@/objects/address";
import { Customer } from "@/objects/customer";
import { Discount } from "@/objects/discount";
import { DiscountApplication } from "@/objects/discount-application";
import { GiftCard } from "@/objects/gift-card";
import { LineItem } from "@/objects/line-item";
import { Order } from "@/objects/order";
import { ShippingMethod } from "@/objects/shipping-method";
import { TaxLine } from "@/objects/tax-line";
import { Transaction } from "@/objects/transaction";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A customer's checkout.

*/
export class Checkout extends LiquidObject {
	/**
	 * The gift cards applied to the checkout.
	 */
	@LiquidObject.property() get appliedGiftCards() {
		return new LiquidArray(() => new GiftCard());
	}

	/**
	 * Additional attributes entered by the customer with the [cart](https://shopify.dev/docs/api/liquid/objects/cart#cart-attributes).
	 */
	@LiquidObject.property() get attributes() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The billing address entered at checkout.
	 */
	@LiquidObject.property() get billingAddress() {
		return new Address();
	}

	/**
	 * Returns `true` if the customer checks the email marketing subscription checkbox. Returns `false` if not.
	 */
	@LiquidObject.property() get buyerAcceptsMarketing() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the checkout has been cancelled. Returns `false` if not.
	 * @deprecated Deprecated
	 *
	 * Deprecated because `false` is always returned.
	 */
	@LiquidObject.property() get cancelled() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The cart-specific discount applications for the checkout.
	 */
	@LiquidObject.property() get cartLevelDiscountApplications() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency of the checkout.
	 */
	@LiquidObject.property() get currency() {
		return new DataType(Primitive.string);
	}

	/**
	 * The customer associated with the checkout.
	 *
	 * Note
	 *
	 * The [`customer` object](https://shopify.dev/docs/api/liquid/objects/customer) is directly accessible globally when a customer is logged in to their account.
	 */
	@LiquidObject.property() get customer() {
		return new Customer();
	}

	/**
	 * A discount applied to the checkout without being saved.
	 * @deprecated Deprecated
	 *
	 * Deprecated because an unsaved discount doesn't exist on the [**Order status** page](https://help.shopify.com/manual/orders/status-tracking).
	 */
	@LiquidObject.property() get discount() {
		return new Discount();
	}

	/**
	 * The discount applications for the checkout.
	 */
	@LiquidObject.property() get discountApplications() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The discounts applied to the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because not all discount types and details are captured.
	 *
	 * The `checkout.discounts` property has been replaced by [`checkout.discount_applications`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-discount_applications).
	 */
	@LiquidObject.property() get discounts() {
		return new LiquidArray(() => new Discount());
	}

	/**
	 * The total amount of the discounts applied to the checkout in the currency's subunit.
	 */
	@LiquidObject.property() get discountsAmount() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The total amount of the discounts applied to the checkout in the currency's subunit, as a negative value.
	 */
	@LiquidObject.property() get discountsSavings() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The email associated with the checkout.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The financial status of the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because `nil` is always returned.
	 */
	@LiquidObject.property() get financialStatus() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for the fulfullment of the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because `nil` is always returned.
	 */
	@LiquidObject.property() get fulfilledAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The fulfilled line items from the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because the array is always empty.
	 */
	@LiquidObject.property() get fulfilledLineItems() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The fulfillment status of the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because `unfulfilled` is always returned.
	 */
	@LiquidObject.property() get fulfillmentStatus() {
		return new DataType(Primitive.string);
	}

	/**
	 * The amount of the checkout price paid in gift cards.
	 */
	@LiquidObject.property() get giftCardsAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The ID of the checkout.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The number of items in the checkout.
	 */
	@LiquidObject.property() get itemCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The line items of the checkout.
	 */
	@LiquidObject.property() get lineItems() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The sum of the prices of all of the line items of the checkout in the currency's subunit, after any line item discounts. have been applied.
	 */
	@LiquidObject.property() get lineItemsSubtotalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the checkout.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.number);
	}

	/**
	 * Additional information entered by the customer with the [cart](https://shopify.dev/docs/api/liquid/objects/cart#cart-note).
	 */
	@LiquidObject.property() get note() {
		return new DataType(Primitive.string);
	}

	/**
	 * The order created by the checkout.
	 */
	@LiquidObject.property() get order() {
		return new Order();
	}

	/**
	 * The ID of the order created by the checkout.
	 */
	@LiquidObject.property() get orderId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the order created by the checkout.
	 */
	@LiquidObject.property() get orderName() {
		return new DataType(Primitive.string);
	}

	/**
	 * An integer representation of the name of the order created by the checkout.
	 */
	@LiquidObject.property() get orderNumber() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if any of the line items of the checkout require shipping. Returns `false` if not.
	 */
	@LiquidObject.property() get requiresShipping() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The shipping address of the checkout.
	 */
	@LiquidObject.property() get shippingAddress() {
		return new Address();
	}

	/**
	 * The shipping method of the checkout.
	 */
	@LiquidObject.property() get shippingMethod() {
		return new ShippingMethod();
	}

	/**
	 * The shipping price of the checkout in the currency's subunit.
	 */
	@LiquidObject.property() get shippingPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The tax lines for the checkout.
	 */
	@LiquidObject.property() get taxLines() {
		return new LiquidArray(() => new TaxLine());
	}

	/**
	 * The total tax amount of the checkout in the currency's subunit.
	 */
	@LiquidObject.property() get taxPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total price of the checkout in the currency's subunit.
	 */
	@LiquidObject.property() get totalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The transactions of the checkout.
	 */
	@LiquidObject.property() get transactions() {
		return new LiquidArray(() => new Transaction());
	}

	/**
	 * The unavailable line items of the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because the array is always empty.
	 */
	@LiquidObject.property() get unavailableLineItems() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The unfulfilled line items of the checkout.
	 * @deprecated Deprecated
	 *
	 * Deprecated because the array is always the same as [`checkout.line_items`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-line_items).
	 */
	@LiquidObject.property() get unfulfilledLineItems() {
		return new LiquidArray(() => new LineItem());
	}
}

export const checkout = new Checkout();
