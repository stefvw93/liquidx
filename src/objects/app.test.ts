import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { app } from "./app";

describe("Objects/app", () => {
	test("app properties", () => {
		strictEqual(String(app), "app");
		strictEqual(String(app.metafields), "app.metafields");
	});
});