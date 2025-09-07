import { Dictionary } from "@/util/dictionary";
import { Product } from "./product";

export class AllProducts extends Dictionary<Product> {
	constructor() {
		super(() => new Product());
	}
}

export const allProducts = new AllProducts();
