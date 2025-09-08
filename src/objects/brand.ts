import { BrandColor } from "@/objects/brand-color";
import { Image } from "@/objects/image";
import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the store.

*/
export class Brand extends LiquidObject {
	/**
	 * The brand's colors.
	 */
	@LiquidObject.property() get colors() {
		return new Dictionary(() => new BrandColor());
	}

	/**
	 * The square logo for the brand, resized to 32x32 px.
	 */
	@LiquidObject.property() get coverImage() {
		return new Image();
	}

	/**
	 * The square logo for the brand, resized to 32x32 px.
	 */
	@LiquidObject.property() get faviconUrl() {
		return new Image();
	}

	/**
	 * The default logo for the brand.
	 */
	@LiquidObject.property() get logo() {
		return new Image();
	}

	/**
	 * The social links for the brand.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * A short description of the brand.
	 */
	@LiquidObject.property() get shortDescription() {
		return new DataType(Primitive.string);
	}

	/**
	 * The slogan for the brand.
	 */
	@LiquidObject.property() get slogan() {
		return new DataType(Primitive.string);
	}

	/**
	 * The square logo for the brand.
	 */
	@LiquidObject.property() get squareLogo() {
		return new Image();
	}
}

export const brand = new Brand();
