export const ProductTypeId = Symbol("liquidx/objects/product");

export class Product {
	[ProductTypeId] = ProductTypeId;

	static toString() {
		return "product";
	}
}
