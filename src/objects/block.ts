import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * The content and settings of a [section block](https://shopify.dev/themes/architecture/sections/section-schema#blocks).

*/
export class Block extends LiquidObject {
	/**
	 * The ID of the block.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [settings](https://shopify.dev/themes/architecture/sections/section-schema#blocks) of the block.
	 */
	@LiquidObject.property() get settings() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The data attributes for the block for use in the theme editor.
	 */
	@LiquidObject.property() get shopifyAttributes() {
		return new DataType(Primitive.string);
	}

	/**
	 * The type of the block.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}
}

export const block = new Block();
