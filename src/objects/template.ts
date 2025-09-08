import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about the current [template](https://shopify.dev/docs/themes/architecture/templates).

*/
export class Template extends LiquidObject {
	/**
	 * The name of the template's parent directory.
	 */
	@LiquidObject.property() get directory() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the template's [type](https://shopify.dev/docs/themes/architecture/templates#template-types).
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The custom name of an [alternate template](https://shopify.dev/themes/architecture/templates#alternate-templates).
	 */
	@LiquidObject.property() get suffix() {
		return new DataType(Primitive.string);
	}
}

export const template = new Template();
