import { Article } from "@/objects/article";
import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about a specific [blog](https://help.shopify.com/manual/online-store/blogs/adding-a-blog) in the store.

*/
export class Blog extends LiquidObject {
	/**
	 * All of the tags on the articles in the blog.
	 */
	@LiquidObject.property() get allTags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The articles in the blog.
	 */
	@LiquidObject.property() get articles() {
		return new LiquidArray(() => new Article());
	}

	/**
	 * The total number of articles in the blog. This total doesn't include hidden articles.
	 */
	@LiquidObject.property() get articlesCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if comments are enabled for the blog. Returns `false` if not.
	 */
	@LiquidObject.property() get "commentsEnabled?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the blog.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the blog.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the blog.
	 */
	@LiquidObject.property() get metafields() {
		return new LiquidArray(() => new Metafield());
	}

	/**
	 * Returns `true` if the blog is set to [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments). Returns `false` if not.
	 */
	@LiquidObject.property() get "moderated?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The next (older) article in the blog.
	 */
	@LiquidObject.property() get nextArticle() {
		return new Article();
	}

	/**
	 * The previous (newer) article in the blog.
	 */
	@LiquidObject.property() get previousArticle() {
		return new Article();
	}

	/**
	 * A list of all of the tags on all of the articles in the blog.
	 *
	 * Unlike [`blog.all_tags`](https://shopify.dev/docs/api/liquid/objects/blog#blog-all_tags), this property only returns tags of articles that are in the filtered view.
	 */
	@LiquidObject.property() get tags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the blog.
	 */
	@LiquidObject.property() get templateSuffix() {
		return new DataType(Primitive.string);
	}

	/**
	 * The title of the blog.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the blog.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const blog = new Blog();
