import { describe, test } from "node:test";
import { checkLiquidString } from "~/test-utils/theme-setup";
import { Content, JavaScript, Layout } from "./theme";
import { js } from "@/util/js";
import { Echo } from "./syntax";

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
});
