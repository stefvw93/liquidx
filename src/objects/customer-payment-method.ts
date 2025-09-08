import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A customer's saved payment method.

*/
export class CustomerPaymentMethod extends LiquidObject {
	/**
	 * The instrument type of the payment method (e.g credit\_card).
	 */
	@LiquidObject.property() get paymentInstrumentType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The identifier for the payment method.
	 */
	@LiquidObject.property() get token() {
		return new DataType(Primitive.string);
	}
}

export const customerPaymentMethod = new CustomerPaymentMethod();
