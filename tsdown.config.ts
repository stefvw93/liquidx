import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"jsx-runtime/index.ts",
		"src/**/*.ts",
		"!**/*.test.{ts,tsx}",
		"!test-utils/**/*.ts",
	],
	dts: true,
});
