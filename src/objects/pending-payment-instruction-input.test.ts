import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { pendingPaymentInstructionInput } from "./pending-payment-instruction-input";

describe("Objects/pendingPaymentInstructionInput", () => {
	test("pendingPaymentInstructionInput properties", () => {
		strictEqual(String(pendingPaymentInstructionInput), "pending_payment_instruction_input");
		strictEqual(String(pendingPaymentInstructionInput.header), "pending_payment_instruction_input.header");
		strictEqual(String(pendingPaymentInstructionInput.value), "pending_payment_instruction_input.value");
	});
});