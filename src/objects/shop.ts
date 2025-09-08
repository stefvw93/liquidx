import { Address } from "@/objects/address";
import { Brand } from "@/objects/brand";
import { Currency } from "@/objects/currency";
import { Metafield } from "@/objects/metafield";
import { Policy } from "@/objects/policy";
import { ShopLocale } from "@/objects/shop-locale";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * Information about the store, such as the store address, the total number of products, and various settings.

*/
export class Shop extends LiquidObject {
	/**
	 * Returns `true` if the store accepts gift cards. Returns `false` if not.
	 */
	@LiquidObject.property() get acceptsGiftCards() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The address of the store.
	 */
	@LiquidObject.property() get address() {
		return new Address();
	}

	/**
	 * The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the store.
	 */
	@LiquidObject.property() get brand() {
		return new Brand();
	}

	/**
	 * The number of collections in the store.
	 */
	@LiquidObject.property() get collectionsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The currency of the store.
	 */
	@LiquidObject.property() get currency() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if customer accounts are required to complete checkout. Returns `false` if not.
	 */
	@LiquidObject.property() get customerAccountsEnabled() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if customer accounts are optional to complete checkout. Returns `false` if not.
	 */
	@LiquidObject.property() get customerAccountsOptional() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The [description](https://help.shopify.com/manual/online-store/setting-up/preferences#edit-the-title-and-meta-description) of the store.
	 */
	@LiquidObject.property() get description() {
		return new DataType(Primitive.string);
	}

	/**
	 * The primary domain of the store.
	 */
	@LiquidObject.property() get domain() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [sender email](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-your-email#change-your-sender-email-address) of the store.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The currencies that the store accepts.
	 */
	@LiquidObject.property() get enabledCurrencies() {
		return new LiquidArray(() => new Currency());
	}

	/**
	 * The locales (languages) that are published on the store.
	 * @deprecated Deprecated
	 *
	 * Deprecated because the name didn't make it clear that the returned locales were published.
	 *
	 * The `shop.enabled_locales` property has been replaced by [`shop.published_locales`](https://shopify.dev/docs/api/liquid/objects/shop#shop-published_locales).
	 */
	@LiquidObject.property() get enabledLocales() {
		return new LiquidArray(() => new ShopLocale());
	}

	/**
	 * The accepted payment types on the store.
	 */
	@LiquidObject.property() get enabledPaymentTypes() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The ID of the store.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The currently active locale (language).
	 * @deprecated Deprecated
	 *
	 * Deprecated because this value is contextual to the request and not a property of the shop resource.
	 *
	 * The `shop.locale` property has been replaced by [request.locale](https://shopify.dev/docs/api/liquid/objects/request#request-locale).
	 */
	@LiquidObject.property() get locale() {
		return new ShopLocale();
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the store.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * All of the [metaobjects](https://shopify.dev/docs/api/liquid/objects/metaobject) of the store.
	 * @deprecated Deprecated
	 *
	 * The `shop.metaobjects` property has been replaced by [`metaobjects`](https://shopify.dev/docs/api/liquid/objects/metaobjects).
	 */
	@LiquidObject.property() get metaobjects() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The money format of the store.
	 */
	@LiquidObject.property() get moneyFormat() {
		return new Currency();
	}

	/**
	 * The money format of the store with the currency included.
	 */
	@LiquidObject.property() get moneyWithCurrencyFormat() {
		return new Currency();
	}

	/**
	 * The name of the store.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The password page message of the store.
	 */
	@LiquidObject.property() get passwordMessage() {
		return new DataType(Primitive.string);
	}

	/**
	 * The `.myshopify.com` domain of the store.
	 */
	@LiquidObject.property() get permanentDomain() {
		return new DataType(Primitive.string);
	}

	/**
	 * The phone number of the store.
	 */
	@LiquidObject.property() get phone() {
		return new DataType(Primitive.string);
	}

	/**
	 * The policies for the store.
	 */
	@LiquidObject.property() get policies() {
		return new LiquidArray(() => new Policy());
	}

	/**
	 * The privacy policy for the store.
	 */
	@LiquidObject.property() get privacyPolicy() {
		return new Policy();
	}

	/**
	 * The number of products in the store.
	 */
	@LiquidObject.property() get productsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The locales (languages) that are published on the store.
	 */
	@LiquidObject.property() get publishedLocales() {
		return new LiquidArray(() => new ShopLocale());
	}

	/**
	 * The refund policy for the store.
	 */
	@LiquidObject.property() get refundPolicy() {
		return new Policy();
	}

	/**
	 * The full URL of the store, with an `https` protocol.
	 */
	@LiquidObject.property() get secureUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The shipping policy for the store.
	 */
	@LiquidObject.property() get shippingPolicy() {
		return new Policy();
	}

	/**
	 * The subscription policy for the store.
	 */
	@LiquidObject.property() get subscriptionPolicy() {
		return new Policy();
	}

	/**
	 * Returns `true` if prices include taxes. Returns `false` if not.
	 * @deprecated Deprecated
	 *
	 * Deprecated because whether or not prices have taxes included is dependent on the customer's country.
	 *
	 * The `shop.taxes_included` property has been replaced by [cart.taxes\_included](https://shopify.dev/docs/api/liquid/objects/cart#cart-taxes_included).
	 */
	@LiquidObject.property() get taxesIncluded() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The terms of service for the store.
	 */
	@LiquidObject.property() get termsOfService() {
		return new Policy();
	}

	/**
	 * All of the product types in the store.
	 */
	@LiquidObject.property() get types() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The full URL of the store.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * All of the product vendors for the store.
	 */
	@LiquidObject.property() get vendors() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}
}

export const shop = new Shop();
