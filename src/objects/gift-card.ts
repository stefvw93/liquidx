import { Customer } from "@/objects/customer";
import { Product } from "@/objects/product";
import { Recipient } from "@/objects/recipient";
import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A [gift card](https://help.shopify.com/manual/products/gift-card-products) that's been issued to a customer or a recipient.

*/
export class GiftCard extends LiquidObject {
	/**
	 * The remaining balance of the gift card in the currency's subunit.
	 */
	@LiquidObject.property() get balance() {
		return new DataType(Primitive.number);
	}

	/**
	 * The code used to redeem the gift card.
	 */
	@LiquidObject.property() get code() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency that the gift card was issued in.
	 */
	@LiquidObject.property() get currency() {
		return new DataType(Primitive.string);
	}

	/**
	 * The customer associated with the gift card.
	 */
	@LiquidObject.property() get customer() {
		return new Customer();
	}

	/**
	 * Returns `true` if the gift card is enabled. Returns `false` if not.
	 */
	@LiquidObject.property() get enabled() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the gift card is expired. Returns `false` if not.
	 */
	@LiquidObject.property() get expired() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * A timestamp for when the gift card expires.
	 */
	@LiquidObject.property() get expiresOn() {
		return new DataType(Primitive.string);
	}

	/**
	 * The initial balance of the gift card in the currency's subunit.
	 */
	@LiquidObject.property() get initialValue() {
		return new DataType(Primitive.number);
	}

	/**
	 * The last 4 characters of the code used to redeem the gift card.
	 */
	@LiquidObject.property() get lastFourCharacters() {
		return new DataType(Primitive.string);
	}

	/**
	 * The personalized message intended for the recipient.
	 */
	@LiquidObject.property() get message() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL to download the gift card as an Apple Wallet Pass.
	 */
	@LiquidObject.property() get passUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The product associated with the gift card.
	 */
	@LiquidObject.property() get product() {
		return new Product();
	}

	/**
	 * The [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties) assigned to the gift card.
	 */
	@LiquidObject.property() get properties() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * A string used to generate a QR code for the gift card.
	 */
	@LiquidObject.property() get qrIdentifier() {
		return new DataType(Primitive.string);
	}

	/**
	 * The recipient associated with the gift card.
	 */
	@LiquidObject.property() get recipient() {
		return new Recipient();
	}

	/**
	 * The scheduled date on which the gift card will be sent to the recipient.
	 */
	@LiquidObject.property() get sendOn() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the gift card.
	 */
	@LiquidObject.property() get templateSuffix() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL to view the gift card. This URL is on the `checkout.shopify.com` domain.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const giftCard = new GiftCard();
