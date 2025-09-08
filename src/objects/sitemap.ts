import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The sitemap for a specific group in the [`robots.txt` file](https://shopify.dev/themes/architecture/templates/robots-txt-liquid).

*/
export class Sitemap extends LiquidObject {
	/**
	 * Returns `Sitemap`.
	 */
	@LiquidObject.property() get directive() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL that the sitemap is hosted at.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const sitemap = new Sitemap();
