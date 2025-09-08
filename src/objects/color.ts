import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A color from a [`color` setting](https://shopify.dev/themes/architecture/settings/input-settings#color).

*/
export class Color extends LiquidObject {
	/**
	 * The alpha component of the color, which is a decimal number between 0.0 and 1.0.
	 */
	@LiquidObject.property() get alpha() {
		return new DataType(Primitive.number);
	}

	/**
	 * The blue component of the color, which is a number between 0 and 255.
	 */
	@LiquidObject.property() get blue() {
		return new DataType(Primitive.number);
	}

	/**
	 * The chroma component of the color, which is a decimal number between 0.0 and 0.5.
	 */
	@LiquidObject.property() get chroma() {
		return new DataType(Primitive.number);
	}

	/**
	 * The color space of the color. Returns 'srgb' or 'oklch'
	 */
	@LiquidObject.property() get colorSpace() {
		return new DataType(Primitive.string);
	}

	/**
	 * The green component of the color, which is a number between 0 and 255.
	 */
	@LiquidObject.property() get green() {
		return new DataType(Primitive.number);
	}

	/**
	 * The hue component of the color, which is a number between 0 and 360.
	 */
	@LiquidObject.property() get hue() {
		return new DataType(Primitive.number);
	}

	/**
	 * The lightness component of the color, which is a number between 0 and 100.
	 */
	@LiquidObject.property() get lightness() {
		return new DataType(Primitive.number);
	}

	/**
	 * The lightness, chroma, and hue values of the color, represented as a space-separated string.
	 */
	@LiquidObject.property() get oklch() {
		return new DataType(Primitive.string);
	}

	/**
	 * The lightness, chroma, hue and alpha values of the color, represented as a space-separated string, with a slash before the alpha channel.
	 */
	@LiquidObject.property() get oklcha() {
		return new DataType(Primitive.string);
	}

	/**
	 * The red component of the color, which is a number between 0 and 255.
	 */
	@LiquidObject.property() get red() {
		return new DataType(Primitive.number);
	}

	/**
	 * The red, green, and blue values of the color, represented as a space-separated string.
	 */
	@LiquidObject.property() get rgb() {
		return new DataType(Primitive.string);
	}

	/**
	 * The red, green, blue, and alpha values of the color, represented as a space-separated string, with a slash before the alpha channel.
	 */
	@LiquidObject.property() get rgba() {
		return new DataType(Primitive.string);
	}

	/**
	 * The saturation component of the color, which is a number between 0 and 100.
	 */
	@LiquidObject.property() get saturation() {
		return new DataType(Primitive.number);
	}
}

export const color = new Color();
