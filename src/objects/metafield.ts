import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A [metafield](https://shopify.dev/apps/metafields) attached to a parent object.

*/
export class Metafield extends LiquidObject {
	/**
	 * Returns `true` if the metafield is a list type. Returns `false` if not.
	 */
	@LiquidObject.property() get "list?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The [type](https://shopify.dev/apps/metafields/types) of the metafield.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the metafield.
	 */
	@LiquidObject.property() get value() {
		return new Dictionary(() => new Unknown());
	}
}

export const metafield = new Metafield();
