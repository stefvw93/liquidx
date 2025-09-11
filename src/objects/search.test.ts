import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { search } from "./search";

describe("Objects/search", () => {
	test("search properties", () => {
		strictEqual(String(search), "search");
		strictEqual(String(search.defaultSortBy), "search.default_sort_by");
		strictEqual(String(search.filters), "search.filters");
		strictEqual(String(search.performed), "search.performed");
		strictEqual(String(search.results), "search.results");
		strictEqual(String(search.resultsCount), "search.results_count");
		strictEqual(String(search.sortBy), "search.sort_by");
		strictEqual(String(search.sortOptions), "search.sort_options");
		strictEqual(String(search.terms), "search.terms");
		strictEqual(String(search.types), "search.types");
	});
});