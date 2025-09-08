import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about the source files for a video.

*/
export class VideoSource extends LiquidObject {
	/**
	 * The format of the video source file.
	 */
	@LiquidObject.property() get format() {
		return new DataType(Primitive.string);
	}

	/**
	 * The height of the video source file.
	 */
	@LiquidObject.property() get height() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the video source file.
	 */
	@LiquidObject.property() get mimeType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) of the video source file.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * The width of the video source file.
	 */
	@LiquidObject.property() get width() {
		return new DataType(Primitive.number);
	}
}

export const videoSource = new VideoSource();
