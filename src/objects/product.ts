import { LiquidObject } from "./object";

const ProductTypeId = Symbol("liquidx/objects/product");

export class Product extends LiquidObject {
  [ProductTypeId] = ProductTypeId;

  filter() {}
}

export const product = new Product();
