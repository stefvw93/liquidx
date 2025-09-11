import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { filterValueDisplay } from "./filter-value-display";

describe("Objects/filterValueDisplay", () => {
	test("filterValueDisplay properties", () => {
		strictEqual(String(filterValueDisplay), "filter_value_display");
		strictEqual(String(filterValueDisplay.type), "filter_value_display.type");
		strictEqual(String(filterValueDisplay.value), "filter_value_display.value");
	});
});