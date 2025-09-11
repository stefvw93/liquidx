import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { section } from "./section";

describe("Objects/section", () => {
	test("section properties", () => {
		strictEqual(String(section), "section");
		strictEqual(String(section.blocks), "section.blocks");
		strictEqual(String(section.id), "section.id");
		strictEqual(String(section.index), "section.index");
		strictEqual(String(section.index0), "section.index0");
		strictEqual(String(section.location), "section.location");
		strictEqual(String(section.settings), "section.settings");
	});
});
