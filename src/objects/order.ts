import { Address } from "@/objects/address";
import { Customer } from "@/objects/customer";
import { Discount } from "@/objects/discount";
import { DiscountApplication } from "@/objects/discount-application";
import { LineItem } from "@/objects/line-item";
import { Metafield } from "@/objects/metafield";
import { ShippingMethod } from "@/objects/shipping-method";
import { TaxLine } from "@/objects/tax-line";
import { Transaction } from "@/objects/transaction";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * An [order](https://help.shopify.com/manual/orders).

*/
export class Order extends LiquidObject {
	/**
	 * The attributes on the order.
	 */
	@LiquidObject.property() get attributes() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The billing address of the order.
	 */
	@LiquidObject.property() get billingAddress() {
		return new Address();
	}

	/**
	 * The reason that the order was cancelled.
	 */
	@LiquidObject.property() get cancelReason() {
		return new DataType(Primitive.string);
	}

	/**
	 * The localized version of the [cancellation reason](https://shopify.dev/docs/api/liquid/objects/order#order-cancel_reason) for the order.
	 */
	@LiquidObject.property() get cancelReasonLabel() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the order was cancelled. Returns `false` if not.
	 */
	@LiquidObject.property() get cancelled() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * A timestamp for when the order was cancelled.
	 */
	@LiquidObject.property() get cancelledAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The discount applications that apply at the order level.
	 */
	@LiquidObject.property() get cartLevelDiscountApplications() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * A randomly generated alpha-numeric identifier for the order that may be shown to the customer instead of the sequential order name. For example, "XPAV284CT", "R50KELTJP" or "35PKUN0UJ". This value isn't guaranteed to be unique.
	 */
	@LiquidObject.property() get confirmationNumber() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for when the order was created.
	 */
	@LiquidObject.property() get createdAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The customer that placed the order.
	 */
	@LiquidObject.property() get customer() {
		return new Customer();
	}

	/**
	 * The URL for the new order details page.
	 */
	@LiquidObject.property() get customerOrderUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the customer to view the order in their account.
	 */
	@LiquidObject.property() get customerUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * All of the discount applications for the order and its line items.
	 */
	@LiquidObject.property() get discountApplications() {
		return new LiquidArray(() => new DiscountApplication());
	}

	/**
	 * The discounts on the order.
	 * @deprecated Deprecated
	 *
	 * Deprecated because not all discount types and details are captured.
	 *
	 * The `order.discounts` property has been replaced by [`order.discount_applications`](https://shopify.dev/docs/api/liquid/objects/order#order-discount_applications).
	 */
	@LiquidObject.property() get discounts() {
		return new Discount();
	}

	/**
	 * The email that's associated with the order.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The order's financial status.
	 */
	@LiquidObject.property() get financialStatus() {
		return new DataType(Primitive.string);
	}

	/**
	 * The localized version of the [financial status](https://shopify.dev/docs/api/liquid/objects/order#order-financial_status) of the order.
	 */
	@LiquidObject.property() get financialStatusLabel() {
		return new DataType(Primitive.string);
	}

	/**
	 * The fulfillment status of the order.
	 */
	@LiquidObject.property() get fulfillmentStatus() {
		return new DataType(Primitive.string);
	}

	/**
	 * The localized version of the [fulfillment status](https://shopify.dev/docs/api/liquid/objects/order#order-fulfillment_status) of the order.
	 */
	@LiquidObject.property() get fulfillmentStatusLabel() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the order.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The number of items in the order.
	 */
	@LiquidObject.property() get itemCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The line items in the order.
	 */
	@LiquidObject.property() get lineItems() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The sum of the prices of all of the line items in the order in the currency's subunit, after any line item discounts have been applied.
	 */
	@LiquidObject.property() get lineItemsSubtotalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the order.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * The name of the order.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The note on the order.
	 */
	@LiquidObject.property() get note() {
		return new DataType(Primitive.string);
	}

	/**
	 * The integer representation of the order [name](https://shopify.dev/docs/api/liquid/objects/order#order-name).
	 */
	@LiquidObject.property() get orderNumber() {
		return new DataType(Primitive.number);
	}

	/**
	 * The URL for the [**Order status** page](https://help.shopify.com/manual/orders/status-tracking) for the order.
	 */
	@LiquidObject.property() get orderStatusUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The phone number associated with the order.
	 */
	@LiquidObject.property() get phone() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the order is a store pickup order.
	 */
	@LiquidObject.property() get "pickupInStore?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The shipping address of the order.
	 */
	@LiquidObject.property() get shippingAddress() {
		return new Address();
	}

	/**
	 * The shipping methods for the order.
	 */
	@LiquidObject.property() get shippingMethods() {
		return new LiquidArray(() => new ShippingMethod());
	}

	/**
	 * The shipping price of the order in the currency's subunit.
	 */
	@LiquidObject.property() get shippingPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The non-tip line items in the order.
	 */
	@LiquidObject.property() get subtotalLineItems() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The sum of the prices of the [subtotal line items](https://shopify.dev/docs/api/liquid/objects/order#order-subtotal_line_items) in the currency's subunit, after any line item or cart discounts have been applied.
	 */
	@LiquidObject.property() get subtotalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) on the order.
	 */
	@LiquidObject.property() get tags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The tax lines on the order.
	 */
	@LiquidObject.property() get taxLines() {
		return new LiquidArray(() => new TaxLine());
	}

	/**
	 * The total amount of taxes applied to the order in the currency's subunit.
	 */
	@LiquidObject.property() get taxPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total amount of all discounts applied to the order in the currency's subunit.
	 */
	@LiquidObject.property() get totalDiscounts() {
		return new DataType(Primitive.number);
	}

	/**
	 * The sum of all duties applied to the line items in the order in the currency's subunit.
	 */
	@LiquidObject.property() get totalDuties() {
		return new DataType(Primitive.number);
	}

	/**
	 * The net amount of the order in the currency's subunit.
	 */
	@LiquidObject.property() get totalNetAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total price of the order in the currency's subunit.
	 */
	@LiquidObject.property() get totalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total amount that's been refunded from the order in the currency's subunit.
	 */
	@LiquidObject.property() get totalRefundedAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The transactions of the order.
	 */
	@LiquidObject.property() get transactions() {
		return new LiquidArray(() => new Transaction());
	}
}

export const order = new Order();
