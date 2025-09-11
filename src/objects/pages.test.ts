import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { pages } from "./pages";

describe("Objects/pages", () => {
	test("pages properties", () => {
		strictEqual(String(pages), "pages");
	});
});
