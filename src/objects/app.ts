import { Metafield } from "@/objects/metafield";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * An app. This object is usually used to access app-specific information for use with [theme app extensions](https://shopify.dev/apps/online-store/theme-app-extensions).

*/
export class App extends LiquidObject {
	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) that are [owned by the app](https://shopify.dev/apps/metafields/app-owned).
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}
}

export const app = new App();
