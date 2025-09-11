import { describe, test } from "node:test";
import { Product } from "@/objects/product";
import { css } from "@/util/css";
import { js } from "@/util/js";
import { checkLiquidString } from "~/test-utils/theme-setup";
import { Echo } from "./syntax";
import {
	Content,
	JavaScript,
	Layout,
	Render,
	Section,
	Stylesheet,
} from "./theme";

describe("Tags/Theme", () => {
	test("content_for 'blocks'", async () => {
		await checkLiquidString(<Content _for="blocks" />);
	});

	test("content_for 'block'", async () => {
		const staticBlockType = `inline-${crypto.randomUUID()}`;

		// create a required static block
		await checkLiquidString(
			<div>test static block</div>,
			`${staticBlockType}.liquid`,
			"blocks",
		);

		// create a content_for 'block' tag with the static block type
		await checkLiquidString(
			<Content
				_for="block"
				type={staticBlockType}
				id="id"
				arbitrary-attribute="value"
			/>,
		);
	});

	test("javascript", async () => {
		await checkLiquidString(
			<JavaScript>{js`console.log("Hello, world!")`}</JavaScript>,
		);
	});

	test("layout none", async () => {
		await checkLiquidString(<Layout />);
	});

	test("layout some", async () => {
		await checkLiquidString(<Layout name="some" />);
		await checkLiquidString(<Layout name={<Echo>expression</Echo>} />);
	});

	test("render", async () => {
		const filename = `inline-${crypto.randomUUID()}`;

		// create a required file reference
		await checkLiquidString(
			<div>test snippet</div>,
			`${filename}.liquid`,
			"snippets",
		);

		await checkLiquidString(<Render filename={filename} />);
		await checkLiquidString(<Render filename={filename} with={Product} />);
		await checkLiquidString(
			<Render filename={filename} with={{ object: Product, as: "alias" }} />,
		);
		await checkLiquidString(
			<Render filename={filename} array="collection.products">
				{(item, _array) => (
					<div>
						<Echo>{item}</Echo>
					</div>
				)}
			</Render>,
		);
	});

	test("section", async () => {
		const name = `inline-${crypto.randomUUID()}`;
		await checkLiquidString(<Section name={name} />);
	});

	test("stylesheet", async () => {
		await checkLiquidString(
			<Stylesheet>
				{css`
          .selector {
            background: green;
          }
        `}
			</Stylesheet>,
		);
	});
});
