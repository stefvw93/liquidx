import { LiquidObject } from "../util/object";
import { Media } from "./media";

export class Product extends LiquidObject {
	constructor() {
		super(LiquidObject.commonObjectConfig);
	}

	@LiquidObject.property() featuredMedia = new Media();
}

export const product = new Product();
