# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LiquidX is a JSX-to-Liquid transpiler for Shopify theme development. It replaces Liquid's bracket-and-percent syntax with type-safe JSX components, providing better developer experience with IDE support and type safety.

## Key Commands

### Development & Testing
- `pnpm dev` - Run tests in watch mode (uses Node.js test runner with --watch)
- `pnpm test` - Run all tests once
- `pnpm test src/path/to/file.test.tsx` - Run a specific test file

### Build & Validation
- `pnpm build` - Build the project using tsdown
- `pnpm typecheck` - Run TypeScript type checking (tsc --noEmit)
- `pnpm lint` - Run Biome linter to check code
- `pnpm lint:fix` - Auto-fix linting issues

### Other Commands
- `pnpm playground` - Run the playground file for experimentation

## Architecture

### JSX Runtime (`/jsx-runtime`)
Custom JSX runtime that transforms JSX into Liquid template strings. The runtime handles:
- HTML element rendering with proper attribute escaping
- Void element validation
- Fragment support
- Component function execution

### Core Components (`/src/tags`)
JSX components that map to Liquid tags:
- **syntax.tsx**: Core Liquid tags (Comment, Doc, Echo, Liquid, Raw)
- **conditional.tsx**: Control flow (If, Unless, Case/When)
- **iteration.tsx**: Loops (For, TableRow, Cycle, Break, Continue)
- **theme.tsx**: Shopify theme-specific tags
- **html.tsx**: HTML rendering utilities

### Liquid Objects (`/src/objects`)
Type-safe representations of Shopify Liquid objects. Each file represents a Shopify object with proper typing and property definitions using the custom LiquidObject class system.

### Filters (`/src/filters`)
Liquid filter implementations organized by category (e.g., string filters).

### Utilities (`/src/util`)
- **dictionary.ts**: Dynamic property access for Liquid objects
- **object.ts**: Base LiquidObject class with property decorators
- **data.ts**: Type system for Liquid data types

### Testing Infrastructure
- Tests use Node.js native test runner (requires Node >= 24)
- Test files use `.test.ts` or `.test.tsx` extension
- Integration with Shopify Theme Check via `checkLiquidString()` helper
- Tests validate generated Liquid against Shopify's official validator
- Prefer to colocate tests with their respective modules (some-module.ts + some-module.test.ts)

## Development Patterns

### Creating New Components
Components are functions that return Liquid template strings:
```tsx
export function ComponentName({ prop }: { prop: type }) {
  return `{% liquid_tag %}content{% endliquid_tag %}`;
}
```

### Testing Components
Tests validate Liquid output using Shopify Theme Check:
```tsx
import { checkLiquidString } from "~/test-utils/theme-setup";
await checkLiquidString(<YourComponent />);
```

### Type System
- Use `LiquidObject` base class for Shopify objects
- Use `@LiquidObject.property()` decorator for object properties
- `DataType` wraps primitive types with Liquid-specific metadata
- `Dictionary` enables dynamic property access with proper typing

## Path Aliases
- `@/*` → `./src/*`
- `~/*` → `./*` (project root)

## Code Style
- Formatter: Biome with tabs
- Quote style: Double quotes
- Tests excluded from linting by default
- JSX configured with custom runtime at `~/jsx-runtime`

## Feature Specification Requirements

### Q: When should I create a specification file?
A: Every feature must have a `specs.md` file in its module directory before implementation begins.

### Q: How should I start a planning session?
A: Every planning session should start with an extensive discussion about feature specifications, ensuring all stakeholders understand the scope and requirements.

### Q: What must be included in a specs.md file?
A: Specs must include:
- **Feature overview and purpose**: Clear description of what the feature does and why it exists
- **Detailed acceptance criteria**: Specific, testable conditions that must be met for the feature to be considered complete

### Q: What additional information could enhance a specification?
A: Specs could include:
- **Technical requirements and constraints**: Performance targets, technology choices, architectural decisions
- **Dependencies and integrations**: External systems, APIs, or internal modules the feature depends on
- **Expected behavior and edge cases**: How the feature should behave in normal and exceptional circumstances

## Mock-First Development Approach

### Q: When should I start implementing a feature?
A: Never start implementation until comprehensive mocks are created using TypeScript's type system. Follow a "mock first, implement later" approach.

### Q: How do I create proper mocks using the type system?
A: Before any implementation, create comprehensive mocks using TypeScript's type system and `declare` keyword. Define the complete API surface including:
- Classes and their methods with full signatures
- Function signatures with parameters and return types
- Constants and variables with their types
- Module exports and re-exports
- All necessary type definitions, interfaces, and type aliases

### Q: What should a mock definition look like?
A: Example mock structure:
```typescript
// feature.mock.ts
declare class FeatureName {
  constructor(config: FeatureConfig);
  method1(param: string): Promise<Result>;
  readonly property: DataType;
}

declare function helperFunction(input: Input): Output;
declare const FEATURE_CONSTANT: string;
export type { FeatureName, FeatureConfig };
```

### Q: How do I validate my mocks before implementation?
A: Mock validation requires:
- **Specification review**: Ensure mocks match all requirements in the specs.md file
- **Type accuracy**: Verify type definitions are complete, accurate, and properly constrained
- **API completeness**: Confirm all specified methods, properties, and exports are included
- **Usage testing**: Write sample usage code against the mocks to verify the API feels natural

## Feature Implementation Rules

### Q: When can I start writing actual implementation code?
A: Only begin actual implementation after both mocks and tests are complete. The implementation phase should be filling in pre-defined, well-tested interfaces.

### Q: How do I transition from mocks to implementation?
A: Replace type-system level mocks with real code:
- Remove `declare` statements and implement actual classes and functions
- Keep all type signatures exactly as defined in the mocks
- Maintain the same module structure and exports
- Example transition:
```typescript
// Before (mock)
declare class Feature {
  method(x: string): number;
}

// After (implementation)
class Feature {
  method(x: string): number {
    // actual implementation here
    return x.length;
  }
}
```

### Q: What constraints must the implementation follow?
A: The implementation must:
- **Match mock signatures exactly**: Every parameter type, return type, and modifier must be identical
- **Satisfy specifications**: All requirements in the colocated specs.md file must be met
- **Pass existing tests**: Tests written against mocks should pass without modification
- **Maintain type compatibility**: No breaking changes to the public API defined in mocks

### Q: How do I ensure implementation correctness?
A: Verify implementation by:
- Running TypeScript compiler to ensure signatures match (`pnpm typecheck`)
- Running all tests to verify behavior (`pnpm test`)
- Cross-referencing the specs.md file in the module directory
- Confirming no changes were needed to mock signatures or test expectations

## Meta Rules
- Always discuss new rules and rule changes in Q&A style
