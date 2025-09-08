import { Metaobject } from "@/objects/metaobject";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A `metaobject_definition` defines the structure of a metaobject type for the store, which consists of a merchant-defined set of [field definitions](https://help.shopify.com/en/manual/metafields/metafield-definitions).

*/
export class MetaobjectDefinition extends LiquidObject {
	/**
	 * The [metaobjects](https://shopify.dev/docs/api/liquid/objects#metaobject) that follow the definition.
	 */
	@LiquidObject.property() get values() {
		return new LiquidArray(() => new Metaobject());
	}

	/**
	 * The total number of entries for the metaobject definition.
	 */
	@LiquidObject.property() get valuesCount() {
		return new DataType(Primitive.number);
	}
}

export const metaobjectDefinition = new MetaobjectDefinition();
