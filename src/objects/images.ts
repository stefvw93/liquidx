import { LiquidObject } from "@/util/object";

/**
 * All of the [images](https://shopify.dev/docs/api/liquid/objects/image) that have been [uploaded](https://help.shopify.com/manual/online-store/images/theme-images#upload-images) to a store.

*/
export class Images extends LiquidObject {}

export const images = new Images();
