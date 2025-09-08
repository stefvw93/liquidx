import { Currency } from "@/objects/currency";
import { Market } from "@/objects/market";
import { ShopLocale } from "@/objects/shop-locale";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A country supported by the store's localization options.

*/
export class Country extends LiquidObject {
	/**
	 * The languages that have been added to the market that this country belongs to.
	 */
	@LiquidObject.property() get availableLanguages() {
		return new LiquidArray(() => new ShopLocale());
	}

	/**
	 * The continent that the country is in.
	 */
	@LiquidObject.property() get continent() {
		return new DataType(Primitive.string);
	}

	/**
	 * The currency used in the country.
	 */
	@LiquidObject.property() get currency() {
		return new Currency();
	}

	/**
	 * The ISO code of the country in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
	 */
	@LiquidObject.property() get isoCode() {
		return new DataType(Primitive.string);
	}

	/**
	 * The market that includes this country.
	 */
	@LiquidObject.property() get market() {
		return new Market();
	}

	/**
	 * The name of the country.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the country is popular for this shop. Otherwise, returns `false`. This can be useful for sorting countries in a country selector.
	 */
	@LiquidObject.property() get "popular?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The unit system of the country.
	 */
	@LiquidObject.property() get unitSystem() {
		return new DataType(Primitive.string);
	}
}

export const country = new Country();
