import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A [metafield](https://shopify.dev/apps/metafields) attached to a parent object.
 *
 * To learn about how to access a metafield on a specific object, refer to [Access metafields](https://shopify.dev/docs/api/liquid/objects/metafield#metafield-access-metafields).
 *
 * Metafields support [multiple data types](https://shopify.dev/apps/metafields/types), which determine the kind of information that's stored in the metafield. You can also output the metafield content in a type-specific format using [metafield filters](https://shopify.dev/docs/api/liquid/filters/metafield-filters).
 */
export class Metafield extends LiquidObject {
	/** Returns `true` if the metafield is a list type. Returns `false` if not. */
	@LiquidObject.property() "list?" = new DataType(Primitive.boolean);

	/** The [type](https://shopify.dev/apps/metafields/types) of the metafield. */
	@LiquidObject.property() type = new DataType(Primitive.string);

	/** The value of the metafield. */
	@LiquidObject.property() value = new DataType(Primitive.string);
}

export const metafield = new Metafield();
