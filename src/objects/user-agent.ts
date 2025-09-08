import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The user-agent, which is the name of the crawler, for a specific group in the [`robots.txt` file](https://shopify.dev/themes/architecture/templates/robots-txt-liquid).

*/
export class UserAgent extends LiquidObject {
	/**
	 * Returns `User-agent`.
	 */
	@LiquidObject.property() get directive() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the user-agent.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const userAgent = new UserAgent();
