import { strictEqual } from "node:assert";
import test, { describe } from "node:test";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { DataType, Primitive } from "../util/data";
import { additionalCheckoutButtons } from "./additional-checkout-buttons";
import { address } from "./address";
import { allCountryOptionTags } from "./all-country-option-tags";
import { shopLocale } from "./shop-locale";

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

	describe("Array", () => {
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
				@LiquidObject.property() "some-array" = new LiquidArray(
					() => new DataType(Primitive.string),
				);
			}

			strictEqual(String(new Test()["some-array"][3]), "test['some-array'][3]");
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

	test("country", () => {});

	test("shopLocale", () => {
		strictEqual(String(shopLocale), "shop_locale");
		strictEqual(String(shopLocale.endonymName), "shop_locale.endonym_name");
		strictEqual(String(shopLocale.isoCode), "shop_locale.iso_code");
		strictEqual(String(shopLocale.name), "shop_locale.name");
		strictEqual(String(shopLocale.primary), "shop_locale.primary");
		strictEqual(String(shopLocale.rootUrl), "shop_locale.root_url");
	});
});
