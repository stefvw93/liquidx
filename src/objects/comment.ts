import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * An article comment.

*/
export class Comment extends LiquidObject {
	/**
	 * The full name of the author of the comment.
	 */
	@LiquidObject.property() get author() {
		return new DataType(Primitive.string);
	}

	/**
	 * The content of the comment.
	 */
	@LiquidObject.property() get content() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for when the comment was created.
	 */
	@LiquidObject.property() get createdAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The email of he author of the comment.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the comment.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The status of the comment. Always returns `published`.
	 */
	@LiquidObject.property() get status() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for when the status of the comment was last updated.
	 */
	@LiquidObject.property() get updatedAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the article that the comment is associated with, with [`comment.id`](https://shopify.dev/docs/api/liquid/objects/comment#comment-id) appended.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const comment = new Comment();
