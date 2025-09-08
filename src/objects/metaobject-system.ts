import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Basic information about a [`metaobject`](https://shopify.dev/api/liquid/objects#metaobject). These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.

*/
export class MetaobjectSystem extends LiquidObject {
	/**
	 * The unique [handle](https://shopify.dev/api/liquid/basics#handles) of the metaobject.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the metaobject.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The type of the metaobject definition.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the metaobject.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const metaobjectSystem = new MetaobjectSystem();
