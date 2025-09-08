import { LiquidObject } from "@/util/object";

/**
 * Dynamically returns content based on the current [template](https://shopify.dev/themes/architecture/templates).

*/
export class ContentForLayout extends LiquidObject {}

export const contentForLayout = new ContentForLayout();
