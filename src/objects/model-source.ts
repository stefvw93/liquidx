import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A model source file.

*/
export class ModelSource extends LiquidObject {
	/**
	 * The format of the model source file.
	 */
	@LiquidObject.property() get format() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the model source file.
	 */
	@LiquidObject.property() get mimeType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) of the model source file.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const modelSource = new ModelSource();
