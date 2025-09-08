import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Header-value pairs that make up the list of payment information specific to the payment method. This information can be be used by the customer to complete the transaction offline.

*/
export class PendingPaymentInstructionInput extends LiquidObject {
	/**
	 * The header of the payment instruction. These are payment method-specific. Example: "Entity" and "Reference" for Multibanco
	 */
	@LiquidObject.property() get header() {
		return new DataType(Primitive.string);
	}

	/**
	 * Contains the corresponding values to the headers of the payment instruction.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const pendingPaymentInstructionInput =
	new PendingPaymentInstructionInput();
