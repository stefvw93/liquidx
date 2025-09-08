import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a Shopify Script.
 * 
 * * * *
 * 
 * Caution
 * 
 * Shopify Scripts will be sunset on August 28, 2025. Migrate your existing scripts to [Shopify Functions](https://shopify.dev/docs/api/functions) before this date.
 * 
 * * * *

*/
export class Script extends LiquidObject {
	/**
	 * The ID of the script.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the script.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}
}

export const script = new Script();
