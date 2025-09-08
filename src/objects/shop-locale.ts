import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A language in a store.

*/
export class ShopLocale extends LiquidObject {
	/**
	 * The name of the locale in the locale itself.
	 */
	@LiquidObject.property() get endonymName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ISO code of the locale in [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag).
	 */
	@LiquidObject.property() get isoCode() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the locale in the store's primary locale.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the locale is the store's primary locale. Returns `false` if not.
	 */
	@LiquidObject.property() get primary() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The relative root URL of the locale.
	 */
	@LiquidObject.property() get rootUrl() {
		return new DataType(Primitive.string);
	}
}

export const shopLocale = new ShopLocale();
