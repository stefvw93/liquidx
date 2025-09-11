import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { checkout } from "./checkout";

describe("Objects/checkout", () => {
	test("checkout properties", () => {
		strictEqual(String(checkout), "checkout");
		strictEqual(
			String(checkout.appliedGiftCards),
			"checkout.applied_gift_cards",
		);
		strictEqual(String(checkout.attributes), "checkout.attributes");
		strictEqual(String(checkout.billingAddress), "checkout.billing_address");
		strictEqual(
			String(checkout.buyerAcceptsMarketing),
			"checkout.buyer_accepts_marketing",
		);
		strictEqual(String(checkout.cancelled), "checkout.cancelled");
		strictEqual(
			String(checkout.cartLevelDiscountApplications),
			"checkout.cart_level_discount_applications",
		);
		strictEqual(String(checkout.currency), "checkout.currency");
		strictEqual(String(checkout.customer), "checkout.customer");
		strictEqual(String(checkout.discount), "checkout.discount");
		strictEqual(
			String(checkout.discountApplications),
			"checkout.discount_applications",
		);
		strictEqual(String(checkout.discounts), "checkout.discounts");
		strictEqual(String(checkout.discountsAmount), "checkout.discounts_amount");
		strictEqual(
			String(checkout.discountsSavings),
			"checkout.discounts_savings",
		);
		strictEqual(String(checkout.email), "checkout.email");
		strictEqual(String(checkout.financialStatus), "checkout.financial_status");
		strictEqual(String(checkout.fulfilledAt), "checkout.fulfilled_at");
		strictEqual(
			String(checkout.fulfilledLineItems),
			"checkout.fulfilled_line_items",
		);
		strictEqual(
			String(checkout.fulfillmentStatus),
			"checkout.fulfillment_status",
		);
		strictEqual(String(checkout.giftCardsAmount), "checkout.gift_cards_amount");
		strictEqual(String(checkout.id), "checkout.id");
		strictEqual(String(checkout.itemCount), "checkout.item_count");
		strictEqual(String(checkout.lineItems), "checkout.line_items");
		strictEqual(
			String(checkout.lineItemsSubtotalPrice),
			"checkout.line_items_subtotal_price",
		);
		strictEqual(String(checkout.name), "checkout.name");
		strictEqual(String(checkout.note), "checkout.note");
		strictEqual(String(checkout.order), "checkout.order");
		strictEqual(String(checkout.orderId), "checkout.order_id");
		strictEqual(String(checkout.orderName), "checkout.order_name");
		strictEqual(String(checkout.orderNumber), "checkout.order_number");
		strictEqual(
			String(checkout.requiresShipping),
			"checkout.requires_shipping",
		);
		strictEqual(String(checkout.shippingAddress), "checkout.shipping_address");
		strictEqual(String(checkout.shippingMethod), "checkout.shipping_method");
		strictEqual(String(checkout.shippingPrice), "checkout.shipping_price");
		strictEqual(String(checkout.taxLines), "checkout.tax_lines");
		strictEqual(String(checkout.taxPrice), "checkout.tax_price");
		strictEqual(String(checkout.totalPrice), "checkout.total_price");
		strictEqual(String(checkout.transactions), "checkout.transactions");
		strictEqual(
			String(checkout.unavailableLineItems),
			"checkout.unavailable_line_items",
		);
		strictEqual(
			String(checkout.unfulfilledLineItems),
			"checkout.unfulfilled_line_items",
		);
	});
});
