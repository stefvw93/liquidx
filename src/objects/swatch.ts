import { Color } from "@/objects/color";
import { Image } from "@/objects/image";
import { LiquidObject } from "@/util/object";

/**
 * Color and image for visual representation. Available for [product option values](https://shopify.dev/docs/api/liquid/objects/product_option_value) and [filter values](https://shopify.dev/docs/api/liquid/objects/filter_value).

*/
export class Swatch extends LiquidObject {
	/**
	 * The swatch color.
	 */
	@LiquidObject.property() get color() {
		return new Color();
	}

	/**
	 * The swatch image.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}
}

export const swatch = new Swatch();
