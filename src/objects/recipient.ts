import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A recipient that is associated with a [gift card](https://help.shopify.com/manual/products/gift-card-products).

*/
export class Recipient extends LiquidObject {
	/**
	 * The email of the recipient.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The full name of the recipient.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The nickname of the recipient.
	 */
	@LiquidObject.property() get nickname() {
		return new DataType(Primitive.string);
	}
}

export const recipient = new Recipient();
