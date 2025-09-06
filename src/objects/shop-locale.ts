import { LiquidObject } from "@/util/object";
import { DataType, Primitive } from "../util/data";

/**
 * A language in a store.
 *
 * To learn how to offer localization options in your theme, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).
 */
export class ShopLocale extends LiquidObject {
	/** The name of the locale in the locale itself. */
	@LiquidObject.property() endonymName = new DataType(Primitive.string);

	/** The ISO code of the locale in [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag). */
	@LiquidObject.property() isoCode = new DataType(Primitive.string);

	/** The name of the locale in the store's primary locale. */
	@LiquidObject.property() name = new DataType(Primitive.string);

	/** Returns true if the locale is the store's primary locale. Returns false if not. */
	@LiquidObject.property() primary = new DataType(Primitive.boolean);

	/** The relative root URL of the locale. */
	@LiquidObject.property() rootUrl = new DataType(Primitive.string);
}

export const shopLocale = new ShopLocale();
