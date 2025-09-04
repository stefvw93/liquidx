# LiquidX

**LiquidX** is a JSX-to-Liquid transpiler for Shopify theme development. It lets you write Liquid templates using JSX syntax, making the templating experience more familiar to React developers.

The project converts JSX components into Shopify Liquid tags, allowing you to leverage the full Liquid API with type-safe, component-based syntax. It validates the generated Liquid using Shopify's theme-check tool to ensure compatibility with Shopify themes.

## Key Features

- Write Liquid templates with JSX syntax
- Type-safe components for the full Liquid API surface
- Automatic validation using Shopify theme-check
- Custom JSX runtime that outputs Liquid template strings instead of HTML

## Installation

```bash
pnpm install liquidx
```

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