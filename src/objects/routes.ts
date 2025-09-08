import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Allows you to generate standard URLs for the storefront.

*/
export class Routes extends LiquidObject {
	/**
	 * The [account addresses page](https://shopify.dev/themes/architecture/templates/customers-addresses) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
	 */
	@LiquidObject.property() get accountAddressesUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [account login page](https://shopify.dev/themes/architecture/templates/customers-login) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
	 */
	@LiquidObject.property() get accountLoginUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL to log a customer out of their account. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
	 */
	@LiquidObject.property() get accountLogoutUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) profile page.
	 */
	@LiquidObject.property() get accountProfileUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [password recovery page](https://shopify.dev/themes/architecture/templates/customers-reset-password) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
	 */
	@LiquidObject.property() get accountRecoverUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [account registration page](https://shopify.dev/themes/architecture/templates/customers-register) URL.
	 */
	@LiquidObject.property() get accountRegisterUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [account page](https://help.shopify.com/manual/customers/customer-accounts) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
	 */
	@LiquidObject.property() get accountUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The all-products collection page URL.
	 */
	@LiquidObject.property() get allProductsCollectionUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the [`/cart/add` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-add-js).
	 */
	@LiquidObject.property() get cartAddUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the [`/cart/change` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-change-js).
	 */
	@LiquidObject.property() get cartChangeUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the [`/cart/clear` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-clear-js).
	 */
	@LiquidObject.property() get cartClearUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the [`/cart/update` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-update-js).
	 */
	@LiquidObject.property() get cartUpdateUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [cart page](https://shopify.dev/themes/architecture/templates/cart) URL.
	 */
	@LiquidObject.property() get cartUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [collection list page](https://shopify.dev/themes/architecture/templates/list-collections) URL.
	 */
	@LiquidObject.property() get collectionsUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [Predictive Search API](https://shopify.dev/api/ajax/reference/predictive-search) URL.
	 */
	@LiquidObject.property() get predictiveSearchUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [Product Recommendations API](https://shopify.dev/api/ajax/reference/product-recommendations) URL.
	 */
	@LiquidObject.property() get productRecommendationsUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The index (home page) URL.
	 */
	@LiquidObject.property() get rootUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [search page](https://shopify.dev/themes/architecture/templates/search) URL.
	 */
	@LiquidObject.property() get searchUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * [Customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) login page. Redirects to the storefront page the customer was on before visiting the login page.
	 */
	@LiquidObject.property() get storefrontLoginUrl() {
		return new DataType(Primitive.string);
	}
}

export const routes = new Routes();
