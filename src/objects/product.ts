import { toSnakeCase } from "@/util/snake-case";
import { LiquidObject } from "./object";

const ProductTypeId = Symbol("liquidx/objects/product");

export class Media extends LiquidObject {}

export class Product extends LiquidObject {
	[key: string]: unknown;
	[ProductTypeId] = ProductTypeId;
	readonly featured_media = new Media(this, "featured_media");
}

export const product = new Product();

product.lmao;
