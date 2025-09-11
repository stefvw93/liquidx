import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { pageImage } from "./page-image";

describe("Objects/pageImage", () => {
	test("pageImage properties", () => {
		strictEqual(String(pageImage), "page_image");
	});
});
