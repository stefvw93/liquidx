import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { pageDescription } from "./page-description";

describe("Objects/pageDescription", () => {
	test("pageDescription properties", () => {
		strictEqual(String(pageDescription), "page_description");
	});
});