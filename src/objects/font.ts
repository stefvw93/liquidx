import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A font from a [`font_picker` setting](https://shopify.dev/themes/architecture/settings/input-settings#font_picker).

*/
export class Font extends LiquidObject {
	/**
	 * The baseline ratio of the font as a decimal.
	 */
	@LiquidObject.property() get baselineRatio() {
		return new DataType(Primitive.number);
	}

	/**
	 * The fallback families of the font.
	 */
	@LiquidObject.property() get fallbackFamilies() {
		return new DataType(Primitive.string);
	}

	/**
	 * The family name of the font.
	 */
	@LiquidObject.property() get family() {
		return new DataType(Primitive.string);
	}

	/**
	 * The style of the font.
	 */
	@LiquidObject.property() get style() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the font is a system font. Returns `false` if not.
	 */
	@LiquidObject.property() get "system?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The variants in the family of the font.
	 */
	@LiquidObject.property() get variants() {
		return new LiquidArray(() => new Font());
	}

	/**
	 * The weight of the font.
	 */
	@LiquidObject.property() get weight() {
		return new DataType(Primitive.number);
	}
}

export const font = new Font();
