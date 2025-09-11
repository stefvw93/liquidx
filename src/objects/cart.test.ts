import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { cart } from "./cart";

describe("Objects/cart", () => {
	test("cart properties", () => {
		strictEqual(String(cart), "cart");
		strictEqual(String(cart.attributes), "cart.attributes");
		strictEqual(
			String(cart.cartLevelDiscountApplications),
			"cart.cart_level_discount_applications",
		);
		strictEqual(
			String(cart.checkoutChargeAmount),
			"cart.checkout_charge_amount",
		);
		strictEqual(String(cart.currency), "cart.currency");
		strictEqual(
			String(cart.discountApplications),
			"cart.discount_applications",
		);
		strictEqual(String(cart.discounts), "cart.discounts");
		strictEqual(String(cart.dutiesIncluded), "cart.duties_included");
		strictEqual(String(cart.itemCount), "cart.item_count");
		strictEqual(String(cart.items), "cart.items");
		strictEqual(String(cart.itemsSubtotalPrice), "cart.items_subtotal_price");
		strictEqual(String(cart.note), "cart.note");
		strictEqual(String(cart.originalTotalPrice), "cart.original_total_price");
		strictEqual(String(cart.requiresShipping), "cart.requires_shipping");
		strictEqual(String(cart.taxesIncluded), "cart.taxes_included");
		strictEqual(String(cart.totalDiscount), "cart.total_discount");
		strictEqual(String(cart.totalPrice), "cart.total_price");
		strictEqual(String(cart.totalWeight), "cart.total_weight");
	});
});
