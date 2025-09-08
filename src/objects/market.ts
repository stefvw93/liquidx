import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A group of one or more regions of the world that a merchant is targeting for sales.

*/
export class Market extends LiquidObject {
	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the market.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the market.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the market.
	 */
	@LiquidObject.property() get metafields() {
		return new LiquidArray(() => new Metafield());
	}
}

export const market = new Market();
