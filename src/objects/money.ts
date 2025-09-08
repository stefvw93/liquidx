import { Currency } from "@/objects/currency";
import { LiquidObject } from "@/util/object";

/**
 * A money value, in the the customer's local (presentment) currency.

*/
export class Money extends LiquidObject {
	/**
	 * The customer's local (presentment) currency.
	 */
	@LiquidObject.property() get currency() {
		return new Currency();
	}
}

export const money = new Money();
