import { Money } from "@/objects/money";
import { LiquidObject } from "@/util/object";

/**
 * A [store credit account](https://help.shopify.com/en/manual/customers/store-credit) owned by a [customer](https://shopify.dev/docs/api/liquid/objects/customer).

*/
export class StoreCreditAccount extends LiquidObject {
	/**
	 * The balance of the store credit account in the currency's subunit.
	 */
	@LiquidObject.property() get balance() {
		return new Money();
	}
}

export const storeCreditAccount = new StoreCreditAccount();
