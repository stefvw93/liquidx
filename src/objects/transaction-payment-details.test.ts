import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { transactionPaymentDetails } from "./transaction-payment-details";

describe("Objects/transactionPaymentDetails", () => {
	test("transactionPaymentDetails properties", () => {
		strictEqual(String(transactionPaymentDetails), "transaction_payment_details");
		strictEqual(String(transactionPaymentDetails.creditCardCompany), "transaction_payment_details.credit_card_company");
		strictEqual(String(transactionPaymentDetails.creditCardLastFourDigits), "transaction_payment_details.credit_card_last_four_digits");
		strictEqual(String(transactionPaymentDetails.creditCardNumber), "transaction_payment_details.credit_card_number");
		strictEqual(String(transactionPaymentDetails.giftCard), "transaction_payment_details.gift_card");
	});
});