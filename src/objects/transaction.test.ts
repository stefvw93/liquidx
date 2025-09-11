import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { transaction } from "./transaction";

describe("Objects/transaction", () => {
	test("transaction properties", () => {
		strictEqual(String(transaction), "transaction");
		strictEqual(String(transaction.amount), "transaction.amount");
		strictEqual(
			String(transaction.buyerPendingPaymentInstructions),
			"transaction.buyer_pending_payment_instructions",
		);
		strictEqual(
			String(transaction.buyerPendingPaymentNotice),
			"transaction.buyer_pending_payment_notice",
		);
		strictEqual(String(transaction.createdAt), "transaction.created_at");
		strictEqual(String(transaction.gateway), "transaction.gateway");
		strictEqual(
			String(transaction.gatewayDisplayName),
			"transaction.gateway_display_name",
		);
		strictEqual(String(transaction.id), "transaction.id");
		strictEqual(String(transaction.kind), "transaction.kind");
		strictEqual(String(transaction.name), "transaction.name");
		strictEqual(
			String(transaction.paymentDetails),
			"transaction.payment_details",
		);
		strictEqual(String(transaction.receipt), "transaction.receipt");
		strictEqual(String(transaction.status), "transaction.status");
		strictEqual(String(transaction.statusLabel), "transaction.status_label");
	});
});
