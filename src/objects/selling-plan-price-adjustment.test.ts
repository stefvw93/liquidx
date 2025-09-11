import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanPriceAdjustment } from "./selling-plan-price-adjustment";

describe("Objects/sellingPlanPriceAdjustment", () => {
	test("sellingPlanPriceAdjustment properties", () => {
		strictEqual(String(sellingPlanPriceAdjustment), "selling_plan_price_adjustment");
		strictEqual(String(sellingPlanPriceAdjustment.orderCount), "selling_plan_price_adjustment.order_count");
		strictEqual(String(sellingPlanPriceAdjustment.position), "selling_plan_price_adjustment.position");
		strictEqual(String(sellingPlanPriceAdjustment.value), "selling_plan_price_adjustment.value");
		strictEqual(String(sellingPlanPriceAdjustment.valueType), "selling_plan_price_adjustment.value_type");
	});
});