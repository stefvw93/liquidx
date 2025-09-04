import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { check } from "@shopify/theme-check-node";

/**
 * Global theme root path for reuse across tests
 */
let globalThemeRoot: string | null = null;

/**
 * Creates a temporary Shopify theme directory structure
 * @returns The path to the theme root directory
 */
export async function setupTheme(): Promise<string> {
	if (globalThemeRoot) {
		return globalThemeRoot;
	}

	// Create a temp theme structure
	const root = await mkdtemp(join(tmpdir(), "themecheck-"));
	globalThemeRoot = root;

	// Create all necessary Shopify theme directories
	const themeDirs = [
		"assets",
		"config",
		"layout",
		"locales",
		"sections",
		"snippets",
		"templates",
		"templates/customers",
	];

	for (const dir of themeDirs) {
		await mkdir(join(root, dir), { recursive: true });
	}

	// Create a basic locale file to satisfy theme-check requirements
	const defaultLocale = {
		general: {
			"404": "Page not found",
		},
	};

	await writeFile(
		join(root, "locales", "en.default.json"),
		JSON.stringify(defaultLocale, null, 2),
		{ encoding: "utf8" },
	);

	return root;
}

/**
 * Writes liquid content to a file and validates it with theme-check
 * @param liquid - The liquid template content to validate
 * @param filename - Optional filename (defaults to "inline.liquid")
 * @param directory - Optional directory within theme (defaults to "snippets")
 * @returns Promise<true> if validation passes
 * @throws Error if theme-check finds issues
 */
export async function checkLiquidString(
	liquid: string,
	filename = `inline-${crypto.randomUUID()}.liquid`,
	directory = "snippets",
): Promise<string> {
	const themeRoot = await setupTheme();
	const filePath = join(themeRoot, directory, filename);

	await writeFile(filePath, liquid, {
		encoding: "utf8",
		flag: "w",
	});

	// Run Theme Check
	const offenses = await check(themeRoot);
	if (offenses[0]) {
		throw new Error(`${offenses[0].check}: ${offenses[0].message}`);
	}

	return liquid;
}

/**
 * Cleanup function to remove the temporary theme directory
 * Call this in test teardown if needed
 */
export async function cleanupTheme(): Promise<void> {
	if (globalThemeRoot) {
		try {
			await rm(globalThemeRoot, { recursive: true, force: true });
		} catch (error) {
			// Ignore cleanup errors in tests
			console.warn("Failed to cleanup theme directory:", error);
		} finally {
			globalThemeRoot = null;
		}
	}
}

/**
 * Gets the current theme root path (useful for direct file operations)
 */
export function getThemeRoot(): string | null {
	return globalThemeRoot;
}
