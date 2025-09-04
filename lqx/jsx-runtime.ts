import type * as HTMLTypes from "html-jsx";

// deno-lint-ignore no-control-regex
const ILLEGAL_ATTR_PATTERN = /[ "'>\/= \u0000-\u001F\uFDD0-\uFDEF\uFFFF\uFFFE]/;

const VOID_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

export type PropsWithChildren<T = object> = T & { children?: string[] };
export type JSXGenericProps = PropsWithChildren<{ [key: string]: unknown }>;
export type JSXTag = string | ((props: object) => string);

export function jsx(
  tag: JSXTag,
  { children = [], ...props }: JSXGenericProps,
): string {
  const normalizedChildren = children ? [children].flat() : [];
  const renderedChildren = normalizedChildren.join("");

  if (tag === Fragment) {
    return renderedChildren;
  }

  if (tag instanceof Function) {
    return tag({ ...props, children: renderedChildren });
  }

  if (typeof tag === "string") {
    if (VOID_ELEMENTS.includes(tag) && normalizedChildren.length) {
      throw new Error("Void elements cannot have children.");
    }

    const attributes = Object.entries(props)
      .map(([key, value]) => {
        if (ILLEGAL_ATTR_PATTERN.test(key)) {
          throw Error(`Illegal attribute name: ${key}`);
        }

        if (value === true) {
          return ` ${key}`;
        }

        if (([null, undefined, false] as unknown[]).includes(value)) {
          return null;
        }

        return ` ${key}="${String(value).replace(/"/g, "&quot;")}"`;
      })
      .filter(Boolean)
      .join("");

    if (VOID_ELEMENTS.includes(tag)) {
      return `<${tag}${attributes}>`;
    } else {
      return `<${tag}${attributes}>${renderedChildren}</${tag}>`;
    }
  }

  throw new Error(`Invalid JSX`);
}

export const jsxs = jsx;

export function Fragment({ children }: { children: string[] }) {
  return jsx("FRAGMENT", { children });
}

// this declaration allows us to augment JSX interfaces
declare module "html-jsx" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> extends JSX.IntrinsicAttributes {
    // here we could add attributes specific only to DOM elements (HTML+SVG)
  }
}

// this introduces our JSX definitions into the global scope
declare global {
  namespace JSX {
    /** The type returned by our `createElement` factory. */
    type Element = string;

    interface IntrinsicElements extends HTMLTypes.IntrinsicElements {
      /** This allows for any tag to be used. */
      [k: string]: unknown;
    }

    // here we can add attributes for all the elements
    interface IntrinsicAttributes {
      /** List index key - each item's `key` must be unique. */
      key?: string | number;
    }

    /**
     * These are exported to the global JSX namespace to allow
     * declaring custom elements types.
     * @see `playground/app.tsx`
     */
    interface HTMLAttributes<T> extends HTMLTypes.HTMLAttributes<T> {}
    interface SVGAttributes<T> extends HTMLTypes.SVGAttributes<T> {}
    interface DOMAttributes<T> extends HTMLTypes.DOMAttributes<T> {}
  }
}
