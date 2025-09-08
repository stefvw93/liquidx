import { Image } from "@/objects/image";
import { VideoSource } from "@/objects/video-source";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about a video uploaded as [product media](https://shopify.dev/docs/api/liquid/objects/product-media) or a [`file_reference` metafield](https://shopify.dev/apps/metafields/types).

*/
export class Video extends LiquidObject {
	/**
	 * The alt text of the video.
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
	 * The duration of the video in milliseconds.
	 */
	@LiquidObject.property() get duration() {
		return new DataType(Primitive.number);
	}

	/**
	 * The ID of the video.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The media type of the model. Always returns `video`.
	 */
	@LiquidObject.property() get mediaType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The position of the video in the [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * A preview image for the video.
	 */
	@LiquidObject.property() get previewImage() {
		return new Image();
	}

	/**
	 * The source files for the video.
	 */
	@LiquidObject.property() get sources() {
		return new LiquidArray(() => new VideoSource());
	}
}

export const video = new Video();
