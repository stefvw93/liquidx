import { Dictionary } from "@/util/dictionary";
import { LiquidObjectPaginateTypeId } from "@/util/object";
import { Product } from "./product";

/**
 * All of the products on a store.

*/
export class AllProducts extends Dictionary<Product> {
	[LiquidObjectPaginateTypeId] = LiquidObjectPaginateTypeId;
}

export const allProducts = new AllProducts(() => new Product());
