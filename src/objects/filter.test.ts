import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { filter } from "./filter";

describe("Objects/filter", () => {
	test("filter properties", () => {
		strictEqual(String(filter), "filter");
		strictEqual(String(filter.activeValues), "filter.active_values");
		strictEqual(String(filter.falseValue), "filter.false_value");
		strictEqual(String(filter.inactiveValues), "filter.inactive_values");
		strictEqual(String(filter.label), "filter.label");
		strictEqual(String(filter.maxValue), "filter.max_value");
		strictEqual(String(filter.minValue), "filter.min_value");
		strictEqual(String(filter.operator), "filter.operator");
		strictEqual(String(filter.paramName), "filter.param_name");
		strictEqual(String(filter.presentation), "filter.presentation");
		strictEqual(String(filter.rangeMax), "filter.range_max");
		strictEqual(String(filter.trueValue), "filter.true_value");
		strictEqual(String(filter.type), "filter.type");
		strictEqual(String(filter.urlToRemove), "filter.url_to_remove");
		strictEqual(String(filter.values), "filter.values");
	});
});