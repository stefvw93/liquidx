import { Media } from "./media";
import { LiquidObject } from "./object";

export class Product extends LiquidObject {
	@LiquidObject.property() featuredMedia = new Media();
}

export const product = new Product();
