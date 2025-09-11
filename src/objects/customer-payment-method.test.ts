import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { customerPaymentMethod } from "./customer-payment-method";

describe("Objects/customerPaymentMethod", () => {
	test("customerPaymentMethod properties", () => {
		strictEqual(String(customerPaymentMethod), "customer_payment_method");
		strictEqual(
			String(customerPaymentMethod.paymentInstrumentType),
			"customer_payment_method.payment_instrument_type",
		);
		strictEqual(
			String(customerPaymentMethod.token),
			"customer_payment_method.token",
		);
	});
});
