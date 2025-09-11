import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { discountAllocation } from "./discount-allocation";

describe("Objects/discountAllocation", () => {
	test("discountAllocation properties", () => {
		strictEqual(String(discountAllocation), "discount_allocation");
		strictEqual(String(discountAllocation.amount), "discount_allocation.amount");
		strictEqual(String(discountAllocation.discountApplication), "discount_allocation.discount_application");
	});
});