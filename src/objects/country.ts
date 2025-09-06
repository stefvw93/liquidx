import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Currency } from "./currency";
import { ShopLocale } from "./shop-locale";

/**
 * A country supported by the store's localization options.
 *
 * To learn how to use the `country` object to offer localization options in your theme, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).
 */
export class Country extends LiquidObject {
	/** The languages that have been added to the market that this country belongs to. */
	@LiquidObject.property() availableLanguages = new LiquidArray(
		() => new ShopLocale(),
	);

	/**
	 * The continent that the country is in.
	 *
	 * Possible values are `Africa`, `Asia`, `Central America`, `Europe`, `North America`, `Oceania`, and `South America`.
	 */
	@LiquidObject.property() continent = new DataType(Primitive.string);

	/** The currency used in the country. */
	@LiquidObject.property() currency = new Currency();

	/** The ISO code of the country in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html). */
	@LiquidObject.property() isoCode = new DataType(Primitive.string);

	/** The market that includes this country. */
	@LiquidObject.property() market = new DataType(Primitive.string);

	/** The name of the country. */
	@LiquidObject.property() name = new DataType(Primitive.string);

	/** Returns `true` if the country is popular for this shop. Otherwise, returns `false`. This can be useful for sorting countries in a country selector. */
	@LiquidObject.property() "popular?" = new DataType(Primitive.boolean);

	/** The unit system of the country. */
	@LiquidObject.property() unitSystem = new DataType(Primitive.string);
}

export const country = new Country();
