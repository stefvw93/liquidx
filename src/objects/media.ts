import { Image } from "@/objects/image";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * An abstract media object that can represent the following object types:
 * 
 * *   [`image`](https://shopify.dev/docs/api/liquid/objects/image)
 * *   [`model`](https://shopify.dev/docs/api/liquid/objects/model)
 * *   [`video`](https://shopify.dev/docs/api/liquid/objects/video)
 * *   [`external_video`](https://shopify.dev/docs/api/liquid/objects/external_video)

*/
export class Media extends LiquidObject {
	/**
	 * The alt text of the media.
	 */
	@LiquidObject.property() get alt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the media.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The media type.
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
	 * A preview image of the media.
	 */
	@LiquidObject.property() get previewImage() {
		return new Image();
	}
}

export const media = new Media();
