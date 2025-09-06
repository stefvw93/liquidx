import { strictEqual, throws } from "node:assert";
import test, { describe } from "node:test";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { DataType, Primitive } from "../util/data";
import { additionalCheckoutButtons } from "./additional-checkout-buttons";
import { address } from "./address";
import { allCountryOptionTags } from "./all-country-option-tags";
import { country } from "./country";
import { currency } from "./currency";
import { market } from "./market";
import { metafield } from "./metafield";
import { shopLocale } from "./shop-locale";

describe("Objects", () => {
	test("readonly properties", () => {
		throws(() => {
			class Test extends LiquidObject {
				@LiquidObject.property() a = new DataType(Primitive.string);
			}
			const test = new Test();
			test.a = new DataType(Primitive.string);
		});
	});

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

			strictEqual(String(new Test()["some-array"][0]), "test['some-array'][0]");
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

	test("country", () => {
		strictEqual(String(country), "country");
		strictEqual(
			String(country.availableLanguages),
			"country.available_languages",
		);
		strictEqual(String(country.continent), "country.continent");
		strictEqual(String(country.currency), "country.currency");
		strictEqual(String(country.isoCode), "country.iso_code");
		strictEqual(String(country.market), "country.market");
		strictEqual(String(country.name), "country.name");
		strictEqual(String(country["popular?"]), "country['popular?']");
		strictEqual(String(country.unitSystem), "country.unit_system");
	});

	test("currency", () => {
		strictEqual(String(currency), "currency");
		strictEqual(String(currency.isoCode), "currency.iso_code");
		strictEqual(String(currency.name), "currency.name");
		strictEqual(String(currency.symbol), "currency.symbol");
	});

	test("market", () => {
		strictEqual(String(market), "market");
		strictEqual(String(market.handle), "market.handle");
		strictEqual(String(market.id), "market.id");
		strictEqual(String(market.metafields), "market.metafields");
	});

	test("metafield", () => {
		strictEqual(String(metafield), "metafield");
		strictEqual(String(metafield["list?"]), "metafield['list?']");
		strictEqual(String(metafield.type), "metafield.type");
		strictEqual(String(metafield.value), "metafield.value");
	});

	test("shopLocale", () => {
		strictEqual(String(shopLocale), "shop_locale");
		strictEqual(String(shopLocale.endonymName), "shop_locale.endonym_name");
		strictEqual(String(shopLocale.isoCode), "shop_locale.iso_code");
		strictEqual(String(shopLocale.name), "shop_locale.name");
		strictEqual(String(shopLocale.primary), "shop_locale.primary");
		strictEqual(String(shopLocale.rootUrl), "shop_locale.root_url");
	});
});
