import { Block } from "@/objects/block";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * The properties and settings of a section.

*/
export class Section extends LiquidObject {
	/**
	 * The blocks of the section.
	 */
	@LiquidObject.property() get blocks() {
		return new LiquidArray(() => new Block());
	}

	/**
	 * The ID of the section.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The 1-based index of the current section within its location.
	 */
	@LiquidObject.property() get index() {
		return new DataType(Primitive.number);
	}

	/**
	 * The 0-based index of the current section within its location.
	 */
	@LiquidObject.property() get index0() {
		return new DataType(Primitive.number);
	}

	/**
	 * The scope or context of the section (template, section group, or global).
	 */
	@LiquidObject.property() get location() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [settings](https://shopify.dev/themes/architecture/sections/section-schema#settings) of the section.
	 */
	@LiquidObject.property() get settings() {
		return new Dictionary(() => new Unknown());
	}
}

export const section = new Section();
