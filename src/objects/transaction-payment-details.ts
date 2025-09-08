import { GiftCard } from "@/objects/gift-card";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about the payment methods used for a transaction.

*/
export class TransactionPaymentDetails extends LiquidObject {
	/**
	 * The name of the company that issued the credit card used for the transaction.
	 */
	@LiquidObject.property() get creditCardCompany() {
		return new DataType(Primitive.string);
	}

	/**
	 * The last four digits of the credit card number of the credit card used for the transaction.
	 */
	@LiquidObject.property() get creditCardLastFourDigits() {
		return new DataType(Primitive.string);
	}

	/**
	 * The credit card number of the credit card used for the transaction.
	 */
	@LiquidObject.property() get creditCardNumber() {
		return new DataType(Primitive.string);
	}

	/**
	 * The gift card used for the transaction.
	 */
	@LiquidObject.property() get giftCard() {
		return new GiftCard();
	}
}

export const transactionPaymentDetails = new TransactionPaymentDetails();
