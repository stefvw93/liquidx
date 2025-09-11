import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { discountApplication } from "./discount-application";

describe("Objects/discountApplication", () => {
	test("discountApplication properties", () => {
		strictEqual(String(discountApplication), "discount_application");
		strictEqual(
			String(discountApplication.targetSelection),
			"discount_application.target_selection",
		);
		strictEqual(
			String(discountApplication.targetType),
			"discount_application.target_type",
		);
		strictEqual(
			String(discountApplication.title),
			"discount_application.title",
		);
		strictEqual(
			String(discountApplication.totalAllocatedAmount),
			"discount_application.total_allocated_amount",
		);
		strictEqual(String(discountApplication.type), "discount_application.type");
		strictEqual(
			String(discountApplication.value),
			"discount_application.value",
		);
		strictEqual(
			String(discountApplication.valueType),
			"discount_application.value_type",
		);
	});
});
