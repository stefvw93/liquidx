import { Image } from "@/objects/image";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The author of a blog article.

*/
export class User extends LiquidObject {
	/**
	 * Returns `true` if the author is the account owner of the store. Returns `false` if not.
	 */
	@LiquidObject.property() get accountOwner() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The bio associated with the author's account.
	 */
	@LiquidObject.property() get bio() {
		return new DataType(Primitive.string);
	}

	/**
	 * The email associated with the author's account.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The first name associated with the author's account.
	 */
	@LiquidObject.property() get firstName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL for the personal website associated with the author's account.
	 */
	@LiquidObject.property() get homepage() {
		return new DataType(Primitive.string);
	}

	/**
	 * The image associated with the author's account.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}

	/**
	 * The last name associated with the author's account.
	 */
	@LiquidObject.property() get lastName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The first and last name associated with the author's account.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}
}

export const user = new User();
