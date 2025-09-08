import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * The visual representation of a filter value.
 * @deprecated Deprecated in favor of the [swatch](https://shopify.dev/docs/api/liquid/objects/swatch) drop.
 */
export class FilterValueDisplay extends LiquidObject {
	/**
	 * The type of visual representation.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The visual representation.
	 */
	@LiquidObject.property() get value() {
		return new Dictionary(() => new Unknown());
	}
}

export const filterValueDisplay = new FilterValueDisplay();
