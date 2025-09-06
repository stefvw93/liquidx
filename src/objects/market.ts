import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Metafield } from "./metafield";

/**
 * A group of one or more regions of the world that a merchant is targeting for sales.
 *
 * To learn more about markets, refer to [Shopify Markets](https://shopify.dev/docs/apps/markets). To make sure that visitors interact with the optimal version of a store using Shopify Markets, refer to [Detect and set a visitor's optimal localization](https://shopify.dev/docs/themes/markets/localization-discovery).
 *
 * {@link https://shopify.dev/docs/api/liquid/objects/metafield}
 */
export class Market extends LiquidObject {
	/** The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the market. */
	@LiquidObject.property() handle = new DataType(Primitive.string);

	/** The ID of the market. */
	@LiquidObject.property() id = new DataType(Primitive.string);

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the market.
	 *
	 * **Tip**: To learn about how to create metafields, refer to [Create and manage metafields](https://shopify.dev/apps/metafields/manage) or visit the [Shopify Help Center](https://help.shopify.com/manual/metafields).
	 */
	@LiquidObject.property() metafields = new Dictionary(() => new Metafield());
}

export const market = new Market();
