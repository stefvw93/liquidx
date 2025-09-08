import { Dictionary } from "@/util/dictionary";
import { Product } from "./product";

/**
 * All of the products on a store.

*/
export class AllProducts extends Dictionary<Product> {}

export const allProducts = new AllProducts(() => new Product());
