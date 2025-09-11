import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { contentForHeader } from "./content-for-header";

describe("Objects/contentForHeader", () => {
	test("contentForHeader properties", () => {
		strictEqual(String(contentForHeader), "content_for_header");
	});
});