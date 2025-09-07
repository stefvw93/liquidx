import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Comment } from "./comment";
import { Image } from "./image";
import { Metafield } from "./metafield";
import { User } from "./user";

/**
 * An article, or [blog post](https://help.shopify.com/manual/online-store/blogs/writing-blogs), in a blog.
 */
export class Article extends LiquidObject {
	/** The full name of the author of the article. */
	@LiquidObject.property() author = new DataType(Primitive.string);

	/** The relative URL where POST requests are sent when creating new comments. */
	@LiquidObject.property() commentPostUrl = new DataType(Primitive.string);

	/**
	 * The published comments for the article.
	 *
	 * Returns an empty array if comments are disabled.
	 *
	 * **Tip**: Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many comments to show at once, up to a limit of 50.
	 */
	@LiquidObject.property() comments = new LiquidArray(() => new Comment());

	/** The number of published comments for the article. */
	@LiquidObject.property() commentsCount = new DataType(Primitive.number);

	/** Returns `true` if comments are enabled. Returns `false` if not. */
	@LiquidObject.property() "commentsEnabled?" = new DataType(Primitive.boolean);

	/** The content of the article. */
	@LiquidObject.property() content = new DataType(Primitive.string);

	/** A timestamp for when the article was created.
	 *
	 * **Tip**: Use the [date filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.
	 */
	@LiquidObject.property() createdAt = new DataType(Primitive.string);

	/** The excerpt of the article. */
	@LiquidObject.property() excerpt = new DataType(Primitive.string);

	/** Returns the article [excerpt](https://shopify.dev/docs/api/liquid/objects/article#article-excerpt) if it exists. Returns the article [content](https://shopify.dev/docs/api/liquid/objects/article#article-content) if no excerpt exists. */
	@LiquidObject.property() excerptOrContent = new DataType(Primitive.string);

	/** The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the article. */
	@LiquidObject.property() handle = new DataType(Primitive.string);

	/** The ID of the article. */
	@LiquidObject.property() id = new DataType(Primitive.string);

	/** The featured image for the article. */
	@LiquidObject.property() image = new Image();

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the article.
	 *
	 * **Tip**: To learn about how to create metafields, refer to [Create and manage metafields](https://shopify.dev/apps/metafields/manage) or visit the [Shopify Help Center](https://help.shopify.com/manual/metafields).
	 */
	@LiquidObject.property() metafields = new Dictionary(() => new Metafield());

	/** Returns `true` if the blog that the article belongs to is set to moderate comments. Returns `false` if not. */
	@LiquidObject.property() "moderated?" = new DataType(Primitive.boolean);

	/**
	 * A timestamp for when the article was published.
	 *
	 **Tip**: Use the [date filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.
	 */
	@LiquidObject.property() publishedAt = new DataType(Primitive.string);

	/** The tags applied to the article. */
	@LiquidObject.property() tags = new LiquidArray(
		() => new DataType(Primitive.string),
	);

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the article.
	 *
	 * The name doesn't include the `article.` prefix, or the file extension (`.json` or `.liquid`).
	 *
	 * If a custom template isn't assigned to the article, then `nil` is returned.
	 */
	@LiquidObject.property() templateSuffix = new DataType(Primitive.string);

	/** The title of the article. */
	@LiquidObject.property() title = new DataType(Primitive.string);

	/**
	 * A timestamp for when the article was updated.
	 *
	 * **Tip**: Use the [date filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.
	 */
	@LiquidObject.property() updatedAt = new DataType(Primitive.string);

	/** The relative URL of the article. */
	@LiquidObject.property() url = new DataType(Primitive.string);

	/** The user associated with the author of the article. */
	@LiquidObject.property() user = new User();
}

export const article = new Article();
