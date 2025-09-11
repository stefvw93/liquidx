import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanOption } from "./selling-plan-option";

describe("Objects/sellingPlanOption", () => {
	test("sellingPlanOption properties", () => {
		strictEqual(String(sellingPlanOption), "selling_plan_option");
		strictEqual(String(sellingPlanOption.name), "selling_plan_option.name");
		strictEqual(
			String(sellingPlanOption.position),
			"selling_plan_option.position",
		);
		strictEqual(String(sellingPlanOption.value), "selling_plan_option.value");
	});
});
