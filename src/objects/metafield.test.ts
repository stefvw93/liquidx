import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { metafield } from "./metafield";

describe("Objects/metafield", () => {
	test("metafield properties", () => {
		strictEqual(String(metafield), "metafield");
		strictEqual(String(metafield["list?"]), "metafield['list?']");
		strictEqual(String(metafield.type), "metafield.type");
		strictEqual(String(metafield.value), "metafield.value");
	});
});