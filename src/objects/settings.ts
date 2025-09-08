import { LiquidObject } from "@/util/object";

/**
 * Allows you to access all of the theme's settings from the [`settings_schema.json` file](https://shopify.dev/themes/architecture/config/settings-schema-json).

*/
export class Settings extends LiquidObject {}

export const settings = new Settings();
