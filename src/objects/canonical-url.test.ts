import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { canonicalUrl } from "./canonical-url";

describe("Objects/canonicalUrl", () => {
	test("canonicalUrl properties", () => {
		strictEqual(String(canonicalUrl), "canonical_url");
	});
});
