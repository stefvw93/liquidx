import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { currentPage } from "./current-page";

describe("Objects/currentPage", () => {
	test("currentPage properties", () => {
		strictEqual(String(currentPage), "current_page");
	});
});
