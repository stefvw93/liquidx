import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { predictiveSearch } from "./predictive-search";

describe("Objects/predictiveSearch", () => {
	test("predictiveSearch properties", () => {
		strictEqual(String(predictiveSearch), "predictive_search");
		strictEqual(
			String(predictiveSearch.performed),
			"predictive_search.performed",
		);
		strictEqual(
			String(predictiveSearch.resources),
			"predictive_search.resources",
		);
		strictEqual(String(predictiveSearch.terms), "predictive_search.terms");
		strictEqual(String(predictiveSearch.types), "predictive_search.types");
	});
});
