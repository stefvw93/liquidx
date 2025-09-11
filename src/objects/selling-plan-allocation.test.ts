import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanAllocation } from "./selling-plan-allocation";

describe("Objects/sellingPlanAllocation", () => {
	test("sellingPlanAllocation properties", () => {
		strictEqual(String(sellingPlanAllocation), "selling_plan_allocation");
		strictEqual(
			String(sellingPlanAllocation.checkoutChargeAmount),
			"selling_plan_allocation.checkout_charge_amount",
		);
		strictEqual(
			String(sellingPlanAllocation.compareAtPrice),
			"selling_plan_allocation.compare_at_price",
		);
		strictEqual(
			String(sellingPlanAllocation.perDeliveryPrice),
			"selling_plan_allocation.per_delivery_price",
		);
		strictEqual(
			String(sellingPlanAllocation.price),
			"selling_plan_allocation.price",
		);
		strictEqual(
			String(sellingPlanAllocation.priceAdjustments),
			"selling_plan_allocation.price_adjustments",
		);
		strictEqual(
			String(sellingPlanAllocation.remainingBalanceChargeAmount),
			"selling_plan_allocation.remaining_balance_charge_amount",
		);
		strictEqual(
			String(sellingPlanAllocation.sellingPlan),
			"selling_plan_allocation.selling_plan",
		);
		strictEqual(
			String(sellingPlanAllocation.sellingPlanGroupId),
			"selling_plan_allocation.selling_plan_group_id",
		);
		strictEqual(
			String(sellingPlanAllocation.unitPrice),
			"selling_plan_allocation.unit_price",
		);
	});
});
