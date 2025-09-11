import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { quantityPriceBreak } from "./quantity-price-break";

describe("Objects/quantityPriceBreak", () => {
	test("quantityPriceBreak properties", () => {
		strictEqual(String(quantityPriceBreak), "quantity_price_break");
		strictEqual(String(quantityPriceBreak.minimumQuantity), "quantity_price_break.minimum_quantity");
		strictEqual(String(quantityPriceBreak.price), "quantity_price_break.price");
	});
});