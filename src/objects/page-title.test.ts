import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { pageTitle } from "./page-title";

describe("Objects/pageTitle", () => {
	test("pageTitle properties", () => {
		strictEqual(String(pageTitle), "page_title");
	});
});
