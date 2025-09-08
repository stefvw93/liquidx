import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A color\_scheme from a [`color_scheme` setting](https://shopify.dev/themes/architecture/settings/input-settings#color_scheme).

*/
export class ColorScheme extends LiquidObject {
	/**
	 * The ID of the color\_scheme
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [settings](https://shopify.dev/docs/themes/architecture/settings/input-settings#color_scheme_group) of the color\_scheme.
	 */
	@LiquidObject.property() get settings() {
		return new Dictionary(() => new Unknown());
	}
}

export const colorScheme = new ColorScheme();
