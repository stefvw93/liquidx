import { LiquidObject } from "@/util/object";

/**
 * The content and settings of a [section block](https://shopify.dev/themes/architecture/sections/section-schema#blocks).
 *
 * Sections and blocks are reusable modules of content that make up templates.
 *
 * You can include a maxiumum of 50 blocks in a section. To learn more about using blocks, refer to the Building with sections and blocks.
 */
export class Block extends LiquidObject {}

export const block = new Block();
