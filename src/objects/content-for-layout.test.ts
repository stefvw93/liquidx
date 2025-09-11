import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { contentForLayout } from "./content-for-layout";

describe("Objects/contentForLayout", () => {
	test("contentForLayout properties", () => {
		strictEqual(String(contentForLayout), "content_for_layout");
	});
});