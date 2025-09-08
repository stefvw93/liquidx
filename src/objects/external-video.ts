import { Image } from "@/objects/image";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about an external video from YouTube or Vimeo.

*/
export class ExternalVideo extends LiquidObject {
	/**
	 * The alt text of the external video.
	 */
	@LiquidObject.property() get alt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The aspect ratio of the video as a decimal.
	 */
	@LiquidObject.property() get aspectRatio() {
		return new DataType(Primitive.number);
	}

	/**
	 * The ID of the video from its external source.
	 */
	@LiquidObject.property() get externalId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The service that hosts the video.
	 */
	@LiquidObject.property() get host() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the external video.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The media type of the external video. Always returns `external_video`.
	 */
	@LiquidObject.property() get mediaType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The position of the external video in the [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.
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

export const externalVideo = new ExternalVideo();
