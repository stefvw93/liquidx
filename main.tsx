import {
  Case,
  Else,
  Elsif,
  If,
  Unless,
  When,
} from "@workspace/lqx/tags/conditional";
import * as prettier from "prettier";
import prettierPluginLiquid from "@shopify/prettier-plugin-liquid";

const PRETTIER_CONFIG: prettier.Options = {
  plugins: [prettierPluginLiquid],
  parser: "liquid-html",
};

class Product {
  static available = true;
}

const tagsConditionalCase = (
  <Case variable="myVariable">
    <When values={["myValue", "myOtherValue"]}>
      expression
    </When>
    <When values={["when2"]}>
      expression
    </When>
    <When values={["when3"]}>
      expression expression
    </When>
    <Else>
      fallback
    </Else>
  </Case>
);

const tagsConditionalIf = (
  <If condition={Product.available}>
    <div>expression</div>
    <Elsif condition="other_condition">
      expression
    </Elsif>
    <Else>
      fallback
    </Else>
  </If>
);

const tagsConditionalUnless = (
  <Unless condition={Product.available}>
    <div>expression</div>
    <Elsif condition="other_condition">
      expression
    </Elsif>
    <Else>
      fallback
    </Else>
  </Unless>
);

console.log(
  await prettier.format(tagsConditionalCase, PRETTIER_CONFIG),
);

console.log(
  await prettier.format(tagsConditionalIf, PRETTIER_CONFIG),
);

console.log(
  await prettier.format(tagsConditionalUnless, PRETTIER_CONFIG),
);
