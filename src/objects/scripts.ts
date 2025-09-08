import { Script } from "@/objects/script";
import { LiquidObject } from "@/util/object";

/**
 * The active scripts, of each script type, on the store.
 * 
 * * * *
 * 
 * Caution
 * 
 * Shopify Scripts will be sunset on August 28, 2025. Migrate your existing scripts to [Shopify Functions](https://shopify.dev/docs/api/functions) before this date.
 * 
 * * * *

*/
export class Scripts extends LiquidObject {
	/**
	 * The active line item script.
	 */
	@LiquidObject.property() get cartCalculateLineItems() {
		return new Script();
	}
}

export const scripts = new Scripts();
