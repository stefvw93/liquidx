import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { articles } from "./articles";

describe("Objects/articles", () => {
	test("articles", () => {
		strictEqual(String(articles), "articles");
		strictEqual(String(articles["some-article"]), "articles['some-article']");
	});
});
