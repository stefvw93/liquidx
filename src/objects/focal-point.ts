import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The focal point for an image.

*/
export class FocalPoint extends LiquidObject {
	/**
	 * The horizontal position of the focal point, as a percent of the image width. Returns `50` if no focal point is set.
	 */
	@LiquidObject.property() get x() {
		return new DataType(Primitive.number);
	}

	/**
	 * The vertical position of the focal point, as a percent of the image height. Returns `50` if no focal point is set.
	 */
	@LiquidObject.property() get y() {
		return new DataType(Primitive.number);
	}
}

export const focalPoint = new FocalPoint();
