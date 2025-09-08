import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * The error category strings for errors from a form created by a [`form` tag](https://shopify.dev/docs/api/liquid/tags/form).

*/
export class FormErrors extends LiquidObject {
	/**
	 * The translated error messages for each value in the `form_errors` array.
	 */
	@LiquidObject.property() get messages() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The translated names for each value in the `form_errors` array.
	 */
	@LiquidObject.property() get translatedFields() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}
}

export const formErrors = new FormErrors();
