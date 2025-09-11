import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { routes } from "./routes";

describe("Objects/routes", () => {
	test("routes properties", () => {
		strictEqual(String(routes), "routes");
		strictEqual(String(routes.accountAddressesUrl), "routes.account_addresses_url");
		strictEqual(String(routes.accountLoginUrl), "routes.account_login_url");
		strictEqual(String(routes.accountLogoutUrl), "routes.account_logout_url");
		strictEqual(String(routes.accountProfileUrl), "routes.account_profile_url");
		strictEqual(String(routes.accountRecoverUrl), "routes.account_recover_url");
		strictEqual(String(routes.accountRegisterUrl), "routes.account_register_url");
		strictEqual(String(routes.accountUrl), "routes.account_url");
		strictEqual(String(routes.allProductsCollectionUrl), "routes.all_products_collection_url");
		strictEqual(String(routes.cartAddUrl), "routes.cart_add_url");
		strictEqual(String(routes.cartChangeUrl), "routes.cart_change_url");
		strictEqual(String(routes.cartClearUrl), "routes.cart_clear_url");
		strictEqual(String(routes.cartUpdateUrl), "routes.cart_update_url");
		strictEqual(String(routes.cartUrl), "routes.cart_url");
		strictEqual(String(routes.collectionsUrl), "routes.collections_url");
		strictEqual(String(routes.predictiveSearchUrl), "routes.predictive_search_url");
		strictEqual(String(routes.productRecommendationsUrl), "routes.product_recommendations_url");
		strictEqual(String(routes.rootUrl), "routes.root_url");
		strictEqual(String(routes.searchUrl), "routes.search_url");
		strictEqual(String(routes.storefrontLoginUrl), "routes.storefront_login_url");
	});
});