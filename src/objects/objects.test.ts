import { strictEqual } from "node:assert";
import test, { describe } from "node:test";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { additionalCheckoutButtons } from "./additional-checkout-buttons";
import { address } from "./address";
import { allCountryOptionTags } from "./all-country-option-tags";
import { DataType, Primitive } from "./data";

describe("Objects", () => {
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
				@LiquidObject.property() "some-dict" = new Dictionary(
					() => new Dictionary(() => new DataType(Primitive.string)),
				);
			}

			strictEqual(
				String(new Test()["some-dict"].foo.bar),
				"test['some-dict'].foo.bar",
			);
		});
	});

	test("additionalCheckoutButtons", () => {
		strictEqual(
			String(additionalCheckoutButtons),
			"additional_checkout_buttons",
		);
	});

	test("address", () => {
		strictEqual(String(address), "address");
		strictEqual(String(address.address1), "address.address1");
		strictEqual(String(address.address2), "address.address2");
		strictEqual(String(address.city), "address.city");
		strictEqual(String(address.company), "address.company");
		strictEqual(String(address.country), "address.country");
		strictEqual(String(address.countryCode), "address.country_code");
		strictEqual(String(address.firstName), "address.first_name");
		strictEqual(String(address.id), "address.id");
		strictEqual(String(address.lastName), "address.last_name");
		strictEqual(String(address.name), "address.name");
		strictEqual(String(address.phone), "address.phone");
		strictEqual(String(address.province), "address.province");
		strictEqual(String(address.provinceCode), "address.province_code");
		strictEqual(String(address.street), "address.street");
		strictEqual(String(address.summary), "address.summary");
		strictEqual(String(address.url), "address.url");
		strictEqual(String(address.zip), "address.zip");
	});

	test("allCountryOptionTags", () => {
		strictEqual(String(allCountryOptionTags), "all_country_option_tags");
	});
});
