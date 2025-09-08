import { ImagePresentation } from "@/objects/image-presentation";
import { Variant } from "@/objects/variant";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * An image, such as a product or collection image.

*/
export class Image extends LiquidObject {
	/**
	 * The alt text of the image.
	 */
	@LiquidObject.property() get alt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The aspect ratio of the image as a decimal.
	 */
	@LiquidObject.property() get aspectRatio() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the image is associated with a variant. Returns `false` if not.
	 */
	@LiquidObject.property() get "attachedToVariant?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The height of the image in pixels.
	 */
	@LiquidObject.property() get height() {
		return new DataType(Primitive.number);
	}

	/**
	 * The ID of the image.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The media type of the image. Always returns `image`.
	 */
	@LiquidObject.property() get mediaType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The position of the image in the [`product.images`](https://shopify.dev/docs/api/liquid/objects/product#product-images) or [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * The presentation settings for the image.
	 */
	@LiquidObject.property() get presentation() {
		return new ImagePresentation();
	}

	/**
	 * A preview image for the image.
	 */
	@LiquidObject.property() get previewImage() {
		return new Image();
	}

	/**
	 * The ID of the product that the image is associated with.
	 */
	@LiquidObject.property() get productId() {
		return new DataType(Primitive.number);
	}

	/**
	 * The relative URL of the image.
	 */
	@LiquidObject.property() get src() {
		return new DataType(Primitive.string);
	}

	/**
	 * The product variants that the image is associated with.
	 */
	@LiquidObject.property() get variants() {
		return new LiquidArray(() => new Variant());
	}

	/**
	 * The width of the image in pixels.
	 */
	@LiquidObject.property() get width() {
		return new DataType(Primitive.number);
	}
}

export const image = new Image();
