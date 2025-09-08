import { Image } from "@/objects/image";
import { ModelSource } from "@/objects/model-source";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A 3D model uploaded as product media.

*/
export class Model extends LiquidObject {
	/**
	 * The alt text of the model.
	 */
	@LiquidObject.property() get alt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the model.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The media type of the model. Always returns `model`.
	 */
	@LiquidObject.property() get mediaType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The position of the model in the [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * A preview image for the model.
	 */
	@LiquidObject.property() get previewImage() {
		return new Image();
	}

	/**
	 * The source files for the model.
	 */
	@LiquidObject.property() get sources() {
		return new LiquidArray(() => new ModelSource());
	}
}

export const model = new Model();
