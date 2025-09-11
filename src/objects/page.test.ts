import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { page } from "./page";

describe("Objects/page", () => {
	test("page properties", () => {
		strictEqual(String(page), "page");
		strictEqual(String(page.author), "page.author");
		strictEqual(String(page.content), "page.content");
		strictEqual(String(page.handle), "page.handle");
		strictEqual(String(page.id), "page.id");
		strictEqual(String(page.metafields), "page.metafields");
		strictEqual(String(page.publishedAt), "page.published_at");
		strictEqual(String(page.templateSuffix), "page.template_suffix");
		strictEqual(String(page.title), "page.title");
		strictEqual(String(page.url), "page.url");
	});
});
