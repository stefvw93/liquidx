import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"jsx-runtime/index.ts",
		"tags/**/*.ts",
		"!**/*.test.{ts,tsx}",
		"!test-utils/**/*.ts",
	],
	dts: true,
});
