import { Country } from "@/objects/country";
import { Market } from "@/objects/market";
import { ShopLocale } from "@/objects/shop-locale";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about the countries and languages that are available on a store.

*/
export class Localization extends LiquidObject {
	/**
	 * The countries that are available on the store.
	 */
	@LiquidObject.property() get availableCountries() {
		return new LiquidArray(() => new Country());
	}

	/**
	 * The languages that are available on the store.
	 */
	@LiquidObject.property() get availableLanguages() {
		return new LiquidArray(() => new ShopLocale());
	}

	/**
	 * The currently selected country on the storefront.
	 */
	@LiquidObject.property() get country() {
		return new Country();
	}

	/**
	 * The currently selected language on the storefront.
	 */
	@LiquidObject.property() get language() {
		return new ShopLocale();
	}

	/**
	 * The currently selected market on the storefront.
	 */
	@LiquidObject.property() get market() {
		return new Market();
	}
}

export const localization = new Localization();
