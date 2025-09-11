import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { giftCard } from "./gift-card";

describe("Objects/giftCard", () => {
	test("giftCard properties", () => {
		strictEqual(String(giftCard), "gift_card");
		strictEqual(String(giftCard.balance), "gift_card.balance");
		strictEqual(String(giftCard.code), "gift_card.code");
		strictEqual(String(giftCard.currency), "gift_card.currency");
		strictEqual(String(giftCard.customer), "gift_card.customer");
		strictEqual(String(giftCard.enabled), "gift_card.enabled");
		strictEqual(String(giftCard.expired), "gift_card.expired");
		strictEqual(String(giftCard.expiresOn), "gift_card.expires_on");
		strictEqual(String(giftCard.initialValue), "gift_card.initial_value");
		strictEqual(String(giftCard.lastFourCharacters), "gift_card.last_four_characters");
		strictEqual(String(giftCard.message), "gift_card.message");
		strictEqual(String(giftCard.passUrl), "gift_card.pass_url");
		strictEqual(String(giftCard.product), "gift_card.product");
		strictEqual(String(giftCard.properties), "gift_card.properties");
		strictEqual(String(giftCard.qrIdentifier), "gift_card.qr_identifier");
		strictEqual(String(giftCard.recipient), "gift_card.recipient");
		strictEqual(String(giftCard.sendOn), "gift_card.send_on");
		strictEqual(String(giftCard.templateSuffix), "gift_card.template_suffix");
		strictEqual(String(giftCard.url), "gift_card.url");
	});
});