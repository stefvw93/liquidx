import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { ShopLocale } from "./shop-locale";

/**
 * A country supported by the store's localization options.
 *
 * To learn how to use the `country` object to offer localization options in your theme, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).
 */
export class Country extends LiquidObject {
	@LiquidObject.property() availableLanguages = new LiquidArray(
		() => new ShopLocale(),
	);
}
