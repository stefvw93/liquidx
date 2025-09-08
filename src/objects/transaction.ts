import { PendingPaymentInstructionInput } from "@/objects/pending-payment-instruction-input";
import { TransactionPaymentDetails } from "@/objects/transaction-payment-details";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A transaction associated with a checkout or order.

*/
export class Transaction extends LiquidObject {
	/**
	 * The amount of the transaction in the currency's subunit.
	 */
	@LiquidObject.property() get amount() {
		return new DataType(Primitive.number);
	}

	/**
	 * A list of `pending_payment_instruction_input` header-value pairs, with payment method-specific details. The customer can use these details to complete their purchase offline.
	 *
	 * If the payment method doesn’t support pending payment instructions, then an empty array is returned.
	 *
	 * Supported payment method
	 *
	 * Expected Values
	 *
	 * ShopifyPayments - Multibanco
	 *
	 * \[{header="Entity", value="12345"}, {header="Reference", value="999999999"}\]
	 */
	@LiquidObject.property() get buyerPendingPaymentInstructions() {
		return new LiquidArray(() => new PendingPaymentInstructionInput());
	}

	/**
	 * A notice that contains instructions for the customer on how to complete their payment. The messages are specific to the payment method used.
	 */
	@LiquidObject.property() get buyerPendingPaymentNotice() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp of when the transaction was created.
	 */
	@LiquidObject.property() get createdAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [handleized](https://shopify.dev/docs/api/liquid/basics#modifying-handles) name of the payment provider used for the transaction.
	 */
	@LiquidObject.property() get gateway() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the payment provider used for the transaction.
	 */
	@LiquidObject.property() get gatewayDisplayName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the transaction.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The type of transaction.
	 */
	@LiquidObject.property() get kind() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the transaction.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The transaction payment details.
	 */
	@LiquidObject.property() get paymentDetails() {
		return new TransactionPaymentDetails();
	}

	/**
	 * Information from the payment provider about the payment receipt.
	 */
	@LiquidObject.property() get receipt() {
		return new DataType(Primitive.string);
	}

	/**
	 * Whether the transaction is pending, and whether additional customer info is required to process the payment.
	 */
	@LiquidObject.property() get "showBuyerPendingPaymentInstructions?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The status of the transaction.
	 */
	@LiquidObject.property() get status() {
		return new DataType(Primitive.string);
	}

	/**
	 * The status of the transaction, translated based on the current locale.
	 */
	@LiquidObject.property() get statusLabel() {
		return new DataType(Primitive.string);
	}
}

export const transaction = new Transaction();
