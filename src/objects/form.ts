import { FormErrors } from "@/objects/form-errors";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a form created by a [`form` tag](https://shopify.dev/docs/api/liquid/tags/form).

*/
export class Form extends LiquidObject {
	/**
	 * The first address line associated with the address.
	 */
	@LiquidObject.property() get address1() {
		return new DataType(Primitive.string);
	}

	/**
	 * The second address line associated with the address.
	 */
	@LiquidObject.property() get address2() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the author of the article comment.
	 */
	@LiquidObject.property() get author() {
		return new DataType(Primitive.string);
	}

	/**
	 * The content of the contact submission or article comment.
	 */
	@LiquidObject.property() get body() {
		return new DataType(Primitive.string);
	}

	/**
	 * The city associated with the address.
	 */
	@LiquidObject.property() get city() {
		return new DataType(Primitive.string);
	}

	/**
	 * The company associated with the address.
	 */
	@LiquidObject.property() get company() {
		return new DataType(Primitive.string);
	}

	/**
	 * The country associated with the address.
	 */
	@LiquidObject.property() get country() {
		return new DataType(Primitive.string);
	}

	/**
	 * The email associated with the form.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * Any errors from the form.
	 */
	@LiquidObject.property() get errors() {
		return new FormErrors();
	}

	/**
	 * The first name associated with the customer or address.
	 */
	@LiquidObject.property() get firstName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the form.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The last name associated with the customer or address.
	 */
	@LiquidObject.property() get lastName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The personalized message intended for the recipient.
	 */
	@LiquidObject.property() get message() {
		return new DataType(Primitive.string);
	}

	/**
	 * The nickname of the gift card recipient.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true`.
	 */
	@LiquidObject.property() get passwordNeeded() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The phone number associated with the address.
	 */
	@LiquidObject.property() get phone() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the form was submitted successfully. Returns `false` if there were errors.
	 */
	@LiquidObject.property() get "postedSuccessfully?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The province associated with the address.
	 */
	@LiquidObject.property() get province() {
		return new DataType(Primitive.string);
	}

	/**
	 * Renders an HTML checkbox that can submit the address as the customer's default address.
	 */
	@LiquidObject.property() get setAsDefaultCheckbox() {
		return new DataType(Primitive.string);
	}

	/**
	 * The zip or postal code associated with the address.
	 */
	@LiquidObject.property() get zip() {
		return new DataType(Primitive.string);
	}
}

export const form = new Form();
