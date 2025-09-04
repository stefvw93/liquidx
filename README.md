# LiquidX

**LiquidX** is a JSX-to-Liquid transpiler for Shopify theme development. It provides a better developer experience by replacing Liquid's error-prone syntax with type-safe JSX components.

The project compiles JSX components into Shopify Liquid code, eliminating the finicky bracket-and-percent syntax while enabling better tooling support and progressive enhancement patterns. 


## Tests
LiquidX is tested with Shopify CLI to ensure compatibility with Shopify themes.

It validates the generated Liquid using Shopify's theme-check tool to ensure compatibility with Shopify themes.

## Key Features

- Write Liquid templates with JSX syntax
- Type-safe components for the full Liquid API surface
- Automatic validation using Shopify theme-check
- Custom JSX runtime that outputs Liquid template strings instead of HTML

## Requirements

- Node.js >= 24
- pnpm >= 10.10.0

## Development

```bash
# Run tests in watch mode
pnpm dev

# Run tests once
pnpm test

# Build the project
pnpm build
```

## License

ISC