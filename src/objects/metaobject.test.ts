import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { metaobject } from "./metaobject";

describe("Objects/metaobject", () => {
	test("metaobject properties", () => {
		strictEqual(String(metaobject), "metaobject");
		strictEqual(String(metaobject.system), "metaobject.system");
	});
});