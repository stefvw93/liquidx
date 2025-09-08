import { Rule } from "@/objects/rule";
import { Sitemap } from "@/objects/sitemap";
import { UserAgent } from "@/objects/user-agent";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A group of rules for the `robots.txt` file.

*/
export class Group extends LiquidObject {
	/**
	 * The rules in the group.
	 */
	@LiquidObject.property() get rules() {
		return new LiquidArray(() => new Rule());
	}

	/**
	 * The sitemap for the group.
	 */
	@LiquidObject.property() get sitemap() {
		return new Sitemap();
	}

	/**
	 * The user agent for the group.
	 */
	@LiquidObject.property() get userAgent() {
		return new UserAgent();
	}
}

export const group = new Group();
