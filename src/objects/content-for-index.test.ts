import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { contentForIndex } from "./content-for-index";

describe("Objects/contentForIndex", () => {
	test("contentForIndex properties", () => {
		strictEqual(String(contentForIndex), "content_for_index");
	});
});