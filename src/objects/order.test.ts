import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { order } from "./order";

describe("Objects/order", () => {
	test("order properties", () => {
		strictEqual(String(order), "order");
		strictEqual(String(order.attributes), "order.attributes");
		strictEqual(String(order.billingAddress), "order.billing_address");
		strictEqual(String(order.cancelReason), "order.cancel_reason");
		strictEqual(String(order.cancelReasonLabel), "order.cancel_reason_label");
		strictEqual(String(order.cancelled), "order.cancelled");
		strictEqual(String(order.cancelledAt), "order.cancelled_at");
		strictEqual(
			String(order.cartLevelDiscountApplications),
			"order.cart_level_discount_applications",
		);
		strictEqual(String(order.confirmationNumber), "order.confirmation_number");
		strictEqual(String(order.createdAt), "order.created_at");
		strictEqual(String(order.customer), "order.customer");
		strictEqual(String(order.customerOrderUrl), "order.customer_order_url");
		strictEqual(String(order.customerUrl), "order.customer_url");
		strictEqual(
			String(order.discountApplications),
			"order.discount_applications",
		);
		strictEqual(String(order.discounts), "order.discounts");
		strictEqual(String(order.email), "order.email");
		strictEqual(String(order.financialStatus), "order.financial_status");
		strictEqual(
			String(order.financialStatusLabel),
			"order.financial_status_label",
		);
		strictEqual(String(order.fulfillmentStatus), "order.fulfillment_status");
		strictEqual(
			String(order.fulfillmentStatusLabel),
			"order.fulfillment_status_label",
		);
		strictEqual(String(order.id), "order.id");
		strictEqual(String(order.itemCount), "order.item_count");
		strictEqual(String(order.lineItems), "order.line_items");
		strictEqual(
			String(order.lineItemsSubtotalPrice),
			"order.line_items_subtotal_price",
		);
		strictEqual(String(order.metafields), "order.metafields");
		strictEqual(String(order.name), "order.name");
		strictEqual(String(order.note), "order.note");
		strictEqual(String(order.orderNumber), "order.order_number");
		strictEqual(String(order.orderStatusUrl), "order.order_status_url");
		strictEqual(String(order.phone), "order.phone");
		strictEqual(String(order.shippingAddress), "order.shipping_address");
		strictEqual(String(order.shippingMethods), "order.shipping_methods");
		strictEqual(String(order.shippingPrice), "order.shipping_price");
		strictEqual(String(order.subtotalLineItems), "order.subtotal_line_items");
		strictEqual(String(order.subtotalPrice), "order.subtotal_price");
		strictEqual(String(order.tags), "order.tags");
		strictEqual(String(order.taxLines), "order.tax_lines");
		strictEqual(String(order.taxPrice), "order.tax_price");
		strictEqual(String(order.totalDiscounts), "order.total_discounts");
		strictEqual(String(order.totalDuties), "order.total_duties");
		strictEqual(String(order.totalNetAmount), "order.total_net_amount");
		strictEqual(String(order.totalPrice), "order.total_price");
		strictEqual(
			String(order.totalRefundedAmount),
			"order.total_refunded_amount",
		);
		strictEqual(String(order.transactions), "order.transactions");
	});
});
