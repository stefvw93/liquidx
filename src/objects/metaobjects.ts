import { LiquidObject } from "@/util/object";

/**
 * All of the [metaobjects](https://shopify.dev/docs/api/liquid/objects/metaobject) of the store.

*/
export class Metaobjects extends LiquidObject {}

export const metaobjects = new Metaobjects();
