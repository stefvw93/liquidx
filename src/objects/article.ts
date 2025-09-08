import { Comment } from "@/objects/comment";
import { Image } from "@/objects/image";
import { Metafield } from "@/objects/metafield";
import { User } from "@/objects/user";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * An article, or [blog post](https://help.shopify.com/manual/online-store/blogs/writing-blogs), in a blog.

*/
export class Article extends LiquidObject {
	/**
	 * The full name of the author of the article.
	 */
	@LiquidObject.property() get author() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL where POST requests are sent when creating new comments.
	 */
	@LiquidObject.property() get commentPostUrl() {
		return new DataType(Primitive.string);
	}

	/**
	 * The published comments for the article.
	 */
	@LiquidObject.property() get comments() {
		return new LiquidArray(() => new Comment());
	}

	/**
	 * The number of published comments for the article.
	 */
	@LiquidObject.property() get commentsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if comments are enabled. Returns `false` if not.
	 */
	@LiquidObject.property() get "commentsEnabled?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The content of the article.
	 */
	@LiquidObject.property() get content() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for when the article was created.
	 */
	@LiquidObject.property() get createdAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The excerpt of the article.
	 */
	@LiquidObject.property() get excerpt() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns the article [excerpt](https://shopify.dev/docs/api/liquid/objects/article#article-excerpt) if it exists. Returns the article [content](https://shopify.dev/docs/api/liquid/objects/article#article-content) if no excerpt exists.
	 */
	@LiquidObject.property() get excerptOrContent() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the article.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the article.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The featured image for the article.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the article.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * Returns `true` if the blog that the article belongs to is set to [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments). Returns `false` if not.
	 */
	@LiquidObject.property() get "moderated?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * A timestamp for when the article was published.
	 */
	@LiquidObject.property() get publishedAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The tags applied to the article.
	 */
	@LiquidObject.property() get tags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the article.
	 */
	@LiquidObject.property() get templateSuffix() {
		return new DataType(Primitive.string);
	}

	/**
	 * The title of the article.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for when the article was updated.
	 */
	@LiquidObject.property() get updatedAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the article.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * The user associated with the author of the article.
	 */
	@LiquidObject.property() get user() {
		return new User();
	}
}

export const article = new Article();
