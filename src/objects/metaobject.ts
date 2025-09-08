import { MetaobjectSystem } from "@/objects/metaobject-system";
import { LiquidObject } from "@/util/object";

/**
 * A metaobject entry, which includes the values for a set of [fields](https://shopify.dev/docs/api/liquid/objects#metafield). The set is defined by the parent [`metaobject_definition`](https://shopify.dev/docs/api/liquid/objects#metaobject_definition).

*/
export class Metaobject extends LiquidObject {
	/**
	 * Basic information about the metaobject. These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.
	 */
	@LiquidObject.property() get system() {
		return new MetaobjectSystem();
	}
}

export const metaobject = new Metaobject();
