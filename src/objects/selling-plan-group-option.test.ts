import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sellingPlanGroupOption } from "./selling-plan-group-option";

describe("Objects/sellingPlanGroupOption", () => {
	test("sellingPlanGroupOption properties", () => {
		strictEqual(String(sellingPlanGroupOption), "selling_plan_group_option");
		strictEqual(
			String(sellingPlanGroupOption.name),
			"selling_plan_group_option.name",
		);
		strictEqual(
			String(sellingPlanGroupOption.position),
			"selling_plan_group_option.position",
		);
		strictEqual(
			String(sellingPlanGroupOption.selectedValue),
			"selling_plan_group_option.selected_value",
		);
		strictEqual(
			String(sellingPlanGroupOption.values),
			"selling_plan_group_option.values",
		);
	});
});
