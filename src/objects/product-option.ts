import { ProductOptionValue } from "@/objects/product-option-value";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A product option, such as size or color.

*/
export class ProductOption extends LiquidObject {
	/**
	 * The name of the product option.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The 1-based index of the product option in the [`product.options_with_values` array](https://shopify.dev/docs/api/liquid/objects/product#product-options_with_values).
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * The currently selected product option value.
	 */
	@LiquidObject.property() get selectedValue() {
		return new DataType(Primitive.string);
	}

	/**
	 * The possible values for the product option.
	 */
	@LiquidObject.property() get values() {
		return new LiquidArray(() => new ProductOptionValue());
	}
}

export const productOption = new ProductOption();
