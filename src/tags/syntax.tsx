import { Context } from "@/util/context";
import { renderToString } from "@/util/renderer";
import type { PropsWithChildren } from "~/jsx-runtime";
import { LiquidComponent, LiquidTag } from "./_tag";

/**
 * Prevents an expression from being rendered or output.
 * Any text inside comment tags won't be output, and any Liquid code will be parsed, but not executed.
 */
export const Comment = new LiquidComponent(LiquidTag.Comment, () => []);
/**
 * Documents template elements with annotations.
 * The doc tag allows developers to include documentation within Liquid templates. Any content inside doc tags is not rendered or outputted. Liquid code inside will be parsed but not executed. This facilitates tooling support for features like code completion, linting, and inline documentation.
 * For detailed documentation syntax and examples, see the [LiquidDoc reference](https://shopify.dev/docs/storefronts/themes/tools/liquid-doc).
 */
export const Doc = new LiquidComponent(LiquidTag.Doc, () => []);

/**
 * Outputs an expression.
 * Using the echo tag is the same as wrapping an expression in curly brackets ({{ and }}). However, unlike the curly bracket method, you can use the echo tag inside [liquid tags](https://shopify.dev/docs/api/liquid/tags/liquid).
 */
export function Echo({ children }: PropsWithChildren) {
	let isLiquidContext: boolean;

	try {
		Context.inject(liquidContext);
		isLiquidContext = true;
	} catch {
		isLiquidContext = false;
	}

	const normalizedChildren = children ? [children].flat() : [];
	const renderedChildren = normalizedChildren.join("");

	return isLiquidContext
		? `echo ${renderedChildren}`
		: `{{ ${renderedChildren} }}`;
}

/**
 * Allows you to have a block of Liquid without delimeters on each tag.
 * Because the tags don't have delimeters, each tag needs to be on its own line.
 */
export function Liquid({ children }: PropsWithChildren) {
	const Component = new LiquidComponent(
		LiquidTag.Liquid,
		() => [renderToString(children)],
		() => null,
	);

	return (
		<liquidContext.Provide value={liquidContextId}>
			<Component />
		</liquidContext.Provide>
	);
}

const liquidContextId = Symbol("liquidx/liquidContext");
const liquidContext = new Context(() => liquidContextId);

/**
 * Outputs any Liquid code as text instead of rendering it.
 */
export const Raw = new LiquidComponent(LiquidTag.Raw, () => []);
