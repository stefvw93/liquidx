import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { metaobjectSystem } from "./metaobject-system";

describe("Objects/metaobjectSystem", () => {
	test("metaobjectSystem properties", () => {
		strictEqual(String(metaobjectSystem), "metaobject_system");
		strictEqual(String(metaobjectSystem.handle), "metaobject_system.handle");
		strictEqual(String(metaobjectSystem.id), "metaobject_system.id");
		strictEqual(String(metaobjectSystem.type), "metaobject_system.type");
		strictEqual(String(metaobjectSystem.url), "metaobject_system.url");
	});
});
