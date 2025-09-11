import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { discount } from "./discount";

describe("Objects/discount", () => {
	test("discount properties", () => {
		strictEqual(String(discount), "discount");
		strictEqual(String(discount.amount), "discount.amount");
		strictEqual(String(discount.code), "discount.code");
		strictEqual(String(discount.savings), "discount.savings");
		strictEqual(String(discount.title), "discount.title");
		strictEqual(String(discount.totalAmount), "discount.total_amount");
		strictEqual(String(discount.totalSavings), "discount.total_savings");
		strictEqual(String(discount.type), "discount.type");
	});
});