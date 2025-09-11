import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { taxonomyCategory } from "./taxonomy-category";

describe("Objects/taxonomyCategory", () => {
	test("taxonomyCategory properties", () => {
		strictEqual(String(taxonomyCategory), "taxonomy_category");
		strictEqual(String(taxonomyCategory.ancestors), "taxonomy_category.ancestors");
		strictEqual(String(taxonomyCategory.gid), "taxonomy_category.gid");
		strictEqual(String(taxonomyCategory.id), "taxonomy_category.id");
		strictEqual(String(taxonomyCategory.name), "taxonomy_category.name");
	});
});