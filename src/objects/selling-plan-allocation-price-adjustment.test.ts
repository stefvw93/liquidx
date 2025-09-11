import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanAllocationPriceAdjustment } from "./selling-plan-allocation-price-adjustment";

describe("Objects/sellingPlanAllocationPriceAdjustment", () => {
	test("sellingPlanAllocationPriceAdjustment properties", () => {
		strictEqual(
			String(sellingPlanAllocationPriceAdjustment),
			"selling_plan_allocation_price_adjustment",
		);
		strictEqual(
			String(sellingPlanAllocationPriceAdjustment.position),
			"selling_plan_allocation_price_adjustment.position",
		);
		strictEqual(
			String(sellingPlanAllocationPriceAdjustment.price),
			"selling_plan_allocation_price_adjustment.price",
		);
	});
});
