import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { metaobjectDefinition } from "./metaobject-definition";

describe("Objects/metaobjectDefinition", () => {
	test("metaobjectDefinition properties", () => {
		strictEqual(String(metaobjectDefinition), "metaobject_definition");
		strictEqual(
			String(metaobjectDefinition.values),
			"metaobject_definition.values",
		);
		strictEqual(
			String(metaobjectDefinition.valuesCount),
			"metaobject_definition.values_count",
		);
	});
});
