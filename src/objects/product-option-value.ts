import { Swatch } from "@/objects/swatch";
import { Variant } from "@/objects/variant";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A product option value, such as "red" for the option "color".

*/
export class ProductOptionValue extends LiquidObject {
	/**
	 * Whether or not the option value is available.
	 */
	@LiquidObject.property() get available() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The ID of the product option value.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the product option value.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns a URL if the option value may be associated with another product, nil otherwise.
	 */
	@LiquidObject.property() get productUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * Whether or not the option value is selected.
	 */
	@LiquidObject.property() get selected() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns a [swatch](https://shopify.dev/docs/api/liquid/objects/swatch) drop for the product option value. If there is no saved `color` or `image` content for the swatch, then the return value is `nil`.
	 */
	@LiquidObject.property() get swatch() {
		return new Swatch();
	}

	/**
	 * The variant associated with this option value combined with the other currently selected option values, if one exists.
	 */
	@LiquidObject.property() get variant() {
		return new Variant();
	}
}

export const productOptionValue = new ProductOptionValue();
