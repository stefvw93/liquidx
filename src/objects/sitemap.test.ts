import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sitemap } from "./sitemap";

describe("Objects/sitemap", () => {
	test("sitemap properties", () => {
		strictEqual(String(sitemap), "sitemap");
		strictEqual(String(sitemap.directive), "sitemap.directive");
		strictEqual(String(sitemap.value), "sitemap.value");
	});
});