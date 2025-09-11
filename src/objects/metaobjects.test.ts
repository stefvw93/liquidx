import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { metaobjects } from "./metaobjects";

describe("Objects/metaobjects", () => {
	test("metaobjects properties", () => {
		strictEqual(String(metaobjects), "metaobjects");
	});
});