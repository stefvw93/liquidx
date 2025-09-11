import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { shopLocale } from "./shop-locale";

describe("Objects/shopLocale", () => {
	test("shopLocale properties", () => {
		strictEqual(String(shopLocale), "shop_locale");
		strictEqual(String(shopLocale.endonymName), "shop_locale.endonym_name");
		strictEqual(String(shopLocale.isoCode), "shop_locale.iso_code");
		strictEqual(String(shopLocale.name), "shop_locale.name");
		strictEqual(String(shopLocale.primary), "shop_locale.primary");
		strictEqual(String(shopLocale.rootUrl), "shop_locale.root_url");
	});
});