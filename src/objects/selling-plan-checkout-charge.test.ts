import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanCheckoutCharge } from "./selling-plan-checkout-charge";

describe("Objects/sellingPlanCheckoutCharge", () => {
	test("sellingPlanCheckoutCharge properties", () => {
		strictEqual(
			String(sellingPlanCheckoutCharge),
			"selling_plan_checkout_charge",
		);
		strictEqual(
			String(sellingPlanCheckoutCharge.value),
			"selling_plan_checkout_charge.value",
		);
		strictEqual(
			String(sellingPlanCheckoutCharge.valueType),
			"selling_plan_checkout_charge.value_type",
		);
	});
});
