import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { collection } from "./collection";

describe("Objects/collection", () => {
	test("collection properties", () => {
		strictEqual(String(collection), "collection");
		strictEqual(
			String(collection.allProductsCount),
			"collection.all_products_count",
		);
		strictEqual(String(collection.allTags), "collection.all_tags");
		strictEqual(String(collection.allTypes), "collection.all_types");
		strictEqual(String(collection.allVendors), "collection.all_vendors");
		strictEqual(String(collection.currentType), "collection.current_type");
		strictEqual(String(collection.currentVendor), "collection.current_vendor");
		strictEqual(String(collection.defaultSortBy), "collection.default_sort_by");
		strictEqual(String(collection.description), "collection.description");
		strictEqual(String(collection.featuredImage), "collection.featured_image");
		strictEqual(String(collection.filters), "collection.filters");
		strictEqual(String(collection.handle), "collection.handle");
		strictEqual(String(collection.id), "collection.id");
		strictEqual(String(collection.image), "collection.image");
		strictEqual(String(collection.metafields), "collection.metafields");
		strictEqual(String(collection.nextProduct), "collection.next_product");
		strictEqual(
			String(collection.previousProduct),
			"collection.previous_product",
		);
		strictEqual(String(collection.products), "collection.products");
		strictEqual(String(collection.productsCount), "collection.products_count");
		strictEqual(String(collection.publishedAt), "collection.published_at");
		strictEqual(String(collection.sortBy), "collection.sort_by");
		strictEqual(String(collection.sortOptions), "collection.sort_options");
		strictEqual(String(collection.tags), "collection.tags");
		strictEqual(
			String(collection.templateSuffix),
			"collection.template_suffix",
		);
		strictEqual(String(collection.title), "collection.title");
		strictEqual(String(collection.url), "collection.url");
	});
});
