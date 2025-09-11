import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { DataType, Primitive } from "./data";
import { Dictionary, LiquidArray } from "./dictionary";
import { LiquidObject } from "./object";

describe("Util/Dictionary", () => {
	describe("Dictionary", () => {
		test("is LiquidObject", () => {
			strictEqual(
				LiquidObject.isLiquidObject(
					new Dictionary(() => new DataType(Primitive.string)),
				),
				true,
			);
		});

		test("dictionary proxy", () => {
			class Test extends LiquidObject {
				@LiquidObject.property() get "some-dict"() {
					return new Dictionary(
						() => new Dictionary(() => new DataType(Primitive.string)),
					);
				}
			}

			strictEqual(
				String(new Test()["some-dict"].foo.bar),
				"test['some-dict'].foo.bar",
			);
		});
	});

	describe("LiquidArray", () => {
		test("is LiquidObject", () => {
			strictEqual(
				LiquidObject.isLiquidObject(
					new LiquidArray(() => new DataType(Primitive.string)),
				),
				true,
			);
		});

		test("array proxy", () => {
			class Test extends LiquidObject {
				@LiquidObject.property() get "some-array"() {
					return new LiquidArray(() => new DataType(Primitive.string));
				}
			}

			strictEqual(String(new Test()["some-array"][0]), "test['some-array'][0]");
		});

		test("array total count", () => {
			class Test extends LiquidObject {
				@LiquidObject.property() get "some-array"() {
					return new LiquidArray(() => new DataType(Primitive.string));
				}
			}

			const totalCount = new Test()["some-array"].totalCount;

			strictEqual(totalCount.type, Primitive.number);
			strictEqual(String(totalCount), "test['some-array'].total_count");
		});
	});
});
