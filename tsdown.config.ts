import { defineConfig } from "tsdown";

export default defineConfig([
	{
		entry: ["src/**/*.ts"],
		outDir: "dist",
		dts: true,
		platform: "node",
	},
	{
		entry: "jsx-runtime/index.ts",
		outDir: "dist/jsx-runtime",
		dts: true,
		platform: "node",
	},
]);
