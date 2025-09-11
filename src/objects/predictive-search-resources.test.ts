import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { predictiveSearchResources } from "./predictive-search-resources";

describe("Objects/predictiveSearchResources", () => {
	test("predictiveSearchResources properties", () => {
		strictEqual(
			String(predictiveSearchResources),
			"predictive_search_resources",
		);
		strictEqual(
			String(predictiveSearchResources.articles),
			"predictive_search_resources.articles",
		);
		strictEqual(
			String(predictiveSearchResources.collections),
			"predictive_search_resources.collections",
		);
		strictEqual(
			String(predictiveSearchResources.pages),
			"predictive_search_resources.pages",
		);
		strictEqual(
			String(predictiveSearchResources.products),
			"predictive_search_resources.products",
		);
	});
});
