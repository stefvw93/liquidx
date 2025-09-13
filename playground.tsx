import { collection } from "@/objects/collection";
import { LiquidComponent, LiquidTag } from "@/tags/_tag";
import { For } from "@/tags/iteration";
import { Echo } from "@/tags/syntax";
import { renderToString } from "@/util/renderer";
import type { PropsWithChildren } from "~/jsx-runtime";

const Tag = new LiquidComponent(
	{
		tag: LiquidTag.For,
		params: ["item in items", ["limit", "10"], "reversed"],
	},
	(props: PropsWithChildren<{ item: string }>) => props.children,
);

console.log(
	renderToString(
		<For range="0..10" reversed offset={2} limit={4}>
			{(x) => <Echo>{x}</Echo>}
		</For>,
	),
);
