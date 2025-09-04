# Test Utilities

Shared utilities for testing Liquid template generation and validation.

## Theme Setup Utilities

The `theme-setup.ts` module provides reusable functions for setting up temporary Shopify theme structures in tests.

### Basic Usage

```typescript
import { before, describe, test } from "node:test";
import { checkLiquidString, setupTheme } from "../test-utils/theme-setup";

describe("My Component Tests", () => {
  before(async () => {
    // Set up the theme structure once for all tests in this suite
    await setupTheme();
  });

  test("should generate valid liquid", async () => {
    await checkLiquidString(`{% if condition %}Hello World{% endif %}`);
  });
});
```

### Advanced Usage

#### Custom File Locations

```typescript
// Write to different directories and filenames
await checkLiquidString(
  `{% render 'my-snippet' %}`,
  "my-template.liquid",
  "templates"
);
```

#### Multiple Test Suites

```typescript
// Each test file can set up its own theme or share a global one
import { setupTheme, cleanupTheme } from "../test-utils/theme-setup";

describe("Component A", () => {
  before(setupTheme);
  // tests...
});

describe("Component B", () => {
  before(setupTheme); // Reuses the same theme if already set up
  // tests...
});

// Optional: Clean up after all tests
after(cleanupTheme);
```

### Available Functions

#### `setupTheme(): Promise<string>`
- Creates a temporary Shopify theme directory structure
- Returns the path to the theme root
- Safe to call multiple times (returns existing theme if already set up)
- Creates all standard Shopify theme directories
- Includes a basic locale file to satisfy theme-check requirements

#### `checkLiquidString(liquid: string, filename?: string, directory?: string): Promise<true>`
- Writes liquid content to a file in the theme structure
- Validates the liquid using `@shopify/theme-check-node`
- Throws an error if validation fails
- Default filename: `"inline.liquid"`
- Default directory: `"snippets"`

#### `cleanupTheme(): Promise<void>`
- Removes the temporary theme directory
- Safe to call multiple times
- Useful for test teardown if needed

#### `getThemeRoot(): string | null`
- Returns the current theme root path
- Useful for direct file operations if needed
- Returns `null` if no theme has been set up

### Best Practices

1. **Use `before` hooks**: Set up the theme once per test suite for better performance
2. **Minimal cleanup**: The temp directories are in the system temp folder and will be cleaned up automatically
3. **Share across files**: Import and use these utilities in any test file that needs theme validation
4. **Error handling**: The `checkLiquidString` function will throw descriptive errors for theme-check violations

### Example Test File Structure

```typescript
/** @jsxImportSource ../dist */

import assert from "node:assert/strict";
import { before, describe, test } from "node:test";
import { checkLiquidString, setupTheme } from "../test-utils/theme-setup";
import { MyComponent } from "./my-component";

describe("MyComponent", () => {
  before(async () => {
    await setupTheme();
  });

  test("should render valid liquid", async () => {
    const result = <MyComponent prop="value" />;
    
    // Validate the generated liquid
    await checkLiquidString(result);
    
    // Assert the expected output
    assert.strictEqual(result, "{% comment %}Expected liquid{% endcomment %}");
  });

  test("should handle edge cases", async () => {
    const result = <MyComponent prop="" />;
    
    await checkLiquidString(result);
    assert.strictEqual(result, "{% comment %}Edge case liquid{% endcomment %}");
  });
});
```

This approach provides:
- **Reusability**: Share setup code across multiple test files
- **Performance**: Create theme structure once per test suite
- **Maintainability**: Centralized theme setup logic
- **Flexibility**: Customize file paths and validation as needed
