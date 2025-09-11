import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { shippingMethod } from "./shipping-method";

describe("Objects/shippingMethod", () => {
	test("shippingMethod properties", () => {
		strictEqual(String(shippingMethod), "shipping_method");
		strictEqual(String(shippingMethod.discountAllocations), "shipping_method.discount_allocations");
		strictEqual(String(shippingMethod.handle), "shipping_method.handle");
		strictEqual(String(shippingMethod.id), "shipping_method.id");
		strictEqual(String(shippingMethod.originalPrice), "shipping_method.original_price");
		strictEqual(String(shippingMethod.price), "shipping_method.price");
		strictEqual(String(shippingMethod.priceWithDiscounts), "shipping_method.price_with_discounts");
		strictEqual(String(shippingMethod.taxLines), "shipping_method.tax_lines");
		strictEqual(String(shippingMethod.title), "shipping_method.title");
	});
});