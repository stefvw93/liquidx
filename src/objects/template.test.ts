import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { template } from "./template";

describe("Objects/template", () => {
	test("template properties", () => {
		strictEqual(String(template), "template");
		strictEqual(String(template.directory), "template.directory");
		strictEqual(String(template.name), "template.name");
		strictEqual(String(template.suffix), "template.suffix");
	});
});
