import { LiquidObject } from "@/util/object";

/**
 * Dynamically returns the content of [sections](https://shopify.dev/themes/architecture/sections) to be rendered on the home page.

*/
export class ContentForIndex extends LiquidObject {}

export const contentForIndex = new ContentForIndex();
