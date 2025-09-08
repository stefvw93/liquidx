import { Image } from "@/objects/image";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A file from a `file_reference` type [metafield](https://shopify.dev/docs/api/liquid/objects/metafield) that is neither an image or video.

*/
export class GenericFile extends LiquidObject {
	/**
	 * The alt text of the media.
	 */
	@LiquidObject.property() get alt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the file.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The media type of the model. Always returns `generic_file`.
	 */
	@LiquidObject.property() get mediaType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The position of the media in the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media).
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * A preview image for the file.
	 */
	@LiquidObject.property() get previewImage() {
		return new Image();
	}

	/**
	 * The [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for the file.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const genericFile = new GenericFile();
