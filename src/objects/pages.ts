import { LiquidObject, LiquidObjectPaginateTypeId } from "@/util/object";

/**
 * All of the [pages](https://shopify.dev/docs/api/liquid/objects/page) on a store.

*/
export class Pages extends LiquidObject {
	[LiquidObjectPaginateTypeId] = LiquidObjectPaginateTypeId;
}

export const pages = new Pages();
