import { throws } from "node:assert";
import { describe, test } from "node:test";
import { DataType, Primitive } from "./data";
import { LiquidObject } from "./object";

describe("Util/LiquidObject", () => {
	test("readonly properties", () => {
		throws(() => {
			class Test extends LiquidObject {
				@LiquidObject.property() get a() {
					return new DataType(Primitive.string);
				}
			}

			const test = new Test();

			// @ts-expect-error - should be readonly
			test.a = new DataType(Primitive.string);
		});
	});
});
