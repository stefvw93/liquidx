import { LiquidObject } from "./object";

const ProductTypeId = Symbol("liquidx/objects/product");

export class Product extends LiquidObject {
  [ProductTypeId] = ProductTypeId;

  static toString() {
    return "product";
  }
}
