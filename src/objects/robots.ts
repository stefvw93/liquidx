import { Group } from "@/objects/group";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * The default rule groups for the `robots.txt` file.

*/
export class Robots extends LiquidObject {
	/**
	 * The rule groups.
	 */
	@LiquidObject.property() get defaultGroups() {
		return new LiquidArray(() => new Group());
	}
}

export const robots = new Robots();
