import { FocalPoint } from "@/objects/focal-point";
import { LiquidObject } from "@/util/object";

/**
 * The presentation settings for an image.

*/
export class ImagePresentation extends LiquidObject {
	/**
	 * The focal point for the image.
	 */
	@LiquidObject.property() get focalPoint() {
		return new FocalPoint();
	}
}

export const imagePresentation = new ImagePresentation();
