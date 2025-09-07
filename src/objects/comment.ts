import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/** An article comment. */
export class Comment extends LiquidObject {
	/** The full name of the author of the comment. */
	@LiquidObject.property() author = new DataType(Primitive.string);

	/** The content of the comment. */
	@LiquidObject.property() content = new DataType(Primitive.string);

	/**
	 * A timestamp for when the comment was created.
	 *
	 * **Tip**: Use the [date filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.
	 */
	@LiquidObject.property() createdAt = new DataType(Primitive.string);

	/** The email of he author of the comment. */
	@LiquidObject.property() email = new DataType(Primitive.string);

	/**
	 * The status of the comment. Always returns `published`.
	 *
	 * Outside of the Liquid context, the status of a comment can vary based on spam detection and whether blog comments are moderated. However, only comments with a status of `published` are included in the [article.comments array](https://shopify.dev/docs/api/liquid/objects/article#article-comments).
	 *
	 * **Tip**: To learn more about blog comments, visit the [Shopify Help Center](https://help.shopify.com/manual/online-store/blogs/managing-comments).
	 */
	@LiquidObject.property() status = new DataType(Primitive.string);

	/**
	 * A timestamp for when the status of the comment was last updated.
	 *
	 * **Tip**: Use the [date filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.
	 */
	@LiquidObject.property() updatedAt = new DataType(Primitive.string);

	/** The relative URL of the article that the comment is associated with, with [comment.id](https://shopify.dev/docs/api/liquid/objects/comment#comment-id) appended. */
	@LiquidObject.property() url = new DataType(Primitive.string);
}

export const comment = new Comment();
