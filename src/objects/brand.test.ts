import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { brand } from "./brand";

describe("Objects/brand", () => {
	test("brand properties", () => {
		strictEqual(String(brand), "brand");
		strictEqual(String(brand.colors), "brand.colors");
		strictEqual(String(brand.coverImage), "brand.cover_image");
		strictEqual(String(brand.faviconUrl), "brand.favicon_url");
		strictEqual(String(brand.logo), "brand.logo");
		strictEqual(String(brand.metafields), "brand.metafields");
		strictEqual(String(brand.shortDescription), "brand.short_description");
		strictEqual(String(brand.slogan), "brand.slogan");
		strictEqual(String(brand.squareLogo), "brand.square_logo");
	});
});