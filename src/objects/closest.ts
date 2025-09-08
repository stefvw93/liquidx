import { Article } from "@/objects/article";
import { Blog } from "@/objects/blog";
import { Collection } from "@/objects/collection";
import { Metaobject } from "@/objects/metaobject";
import { Page } from "@/objects/page";
import { Product } from "@/objects/product";
import { LiquidObject } from "@/util/object";

/**
 * A drop that holds resources of different types that are the closest to the current context

*/
export class Closest extends LiquidObject {
	/**
	 * Closest article resource
	 */
	@LiquidObject.property() get article() {
		return new Article();
	}

	/**
	 * Closest blog resource
	 */
	@LiquidObject.property() get blog() {
		return new Blog();
	}

	/**
	 * Closest collection resource
	 */
	@LiquidObject.property() get collection() {
		return new Collection();
	}

	/**
	 * Closest metaobject resources
	 */
	@LiquidObject.property() get metaobject() {
		return new Metaobject();
	}

	/**
	 * Closest page resource
	 */
	@LiquidObject.property() get page() {
		return new Page();
	}

	/**
	 * Closest product resource
	 */
	@LiquidObject.property() get product() {
		return new Product();
	}
}

export const closest = new Closest();
