import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlan } from "./selling-plan";

describe("Objects/sellingPlan", () => {
	test("sellingPlan properties", () => {
		strictEqual(String(sellingPlan), "selling_plan");
		strictEqual(String(sellingPlan.checkoutCharge), "selling_plan.checkout_charge");
		strictEqual(String(sellingPlan.description), "selling_plan.description");
		strictEqual(String(sellingPlan.groupId), "selling_plan.group_id");
		strictEqual(String(sellingPlan.id), "selling_plan.id");
		strictEqual(String(sellingPlan.name), "selling_plan.name");
		strictEqual(String(sellingPlan.options), "selling_plan.options");
		strictEqual(String(sellingPlan.priceAdjustments), "selling_plan.price_adjustments");
		strictEqual(String(sellingPlan.recurringDeliveries), "selling_plan.recurring_deliveries");
		strictEqual(String(sellingPlan.selected), "selling_plan.selected");
	});
});