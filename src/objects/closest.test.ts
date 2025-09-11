import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { closest } from "./closest";

describe("Objects/closest", () => {
	test("closest properties", () => {
		strictEqual(String(closest), "closest");
		strictEqual(String(closest.article), "closest.article");
		strictEqual(String(closest.blog), "closest.blog");
		strictEqual(String(closest.collection), "closest.collection");
		strictEqual(String(closest.metaobject), "closest.metaobject");
		strictEqual(String(closest.page), "closest.page");
		strictEqual(String(closest.product), "closest.product");
	});
});