import { LiquidObject, LiquidObjectPaginateTypeId } from "@/util/object";

/**
 * All of the [collections](https://shopify.dev/docs/api/liquid/objects/collection) on a store.

*/
export class Collections extends LiquidObject {
	[LiquidObjectPaginateTypeId] = LiquidObjectPaginateTypeId;
}

export const collections = new Collections();
