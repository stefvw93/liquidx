import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { filterValue } from "./filter-value";

describe("Objects/filterValue", () => {
	test("filterValue properties", () => {
		strictEqual(String(filterValue), "filter_value");
		strictEqual(String(filterValue.active), "filter_value.active");
		strictEqual(String(filterValue.count), "filter_value.count");
		strictEqual(String(filterValue.display), "filter_value.display");
		strictEqual(String(filterValue.image), "filter_value.image");
		strictEqual(String(filterValue.label), "filter_value.label");
		strictEqual(String(filterValue.paramName), "filter_value.param_name");
		strictEqual(String(filterValue.swatch), "filter_value.swatch");
		strictEqual(String(filterValue.urlToAdd), "filter_value.url_to_add");
		strictEqual(String(filterValue.urlToRemove), "filter_value.url_to_remove");
		strictEqual(String(filterValue.value), "filter_value.value");
	});
});
