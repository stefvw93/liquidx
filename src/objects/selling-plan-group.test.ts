import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanGroup } from "./selling-plan-group";

describe("Objects/sellingPlanGroup", () => {
	test("sellingPlanGroup properties", () => {
		strictEqual(String(sellingPlanGroup), "selling_plan_group");
		strictEqual(String(sellingPlanGroup.appId), "selling_plan_group.app_id");
		strictEqual(String(sellingPlanGroup.id), "selling_plan_group.id");
		strictEqual(String(sellingPlanGroup.name), "selling_plan_group.name");
		strictEqual(String(sellingPlanGroup.options), "selling_plan_group.options");
		strictEqual(
			String(sellingPlanGroup.sellingPlanSelected),
			"selling_plan_group.selling_plan_selected",
		);
		strictEqual(
			String(sellingPlanGroup.sellingPlans),
			"selling_plan_group.selling_plans",
		);
	});
});
