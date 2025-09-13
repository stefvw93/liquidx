/** biome-ignore-all lint/suspicious/noExplicitAny: needed for testing */

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { FRAGMENT } from "~/jsx-runtime";
import { normalizeChildren, renderToString } from "./renderer";

describe("renderToString", () => {
	describe("null and undefined handling", () => {
		it("should render null as empty string", () => {
			assert.equal(renderToString(null), "");
		});

		it("should render undefined as empty string", () => {
			assert.equal(renderToString(undefined), "");
		});
	});

	describe("primitive values", () => {
		it("should render strings", () => {
			assert.equal(renderToString("hello world"), "hello world");
			assert.equal(renderToString(""), "");
			assert.equal(
				renderToString("special chars: <>&\"'"),
				"special chars: <>&\"'",
			);
		});

		it("should render numbers", () => {
			assert.equal(renderToString(42), "42");
			assert.equal(renderToString(0), "0");
			assert.equal(renderToString(-1), "-1");
			assert.equal(renderToString(3.14159), "3.14159");
			assert.equal(renderToString(Infinity), "Infinity");
			assert.equal(renderToString(NaN), "NaN");
		});

		it("should render bigints", () => {
			assert.equal(
				renderToString(BigInt(9007199254740991)),
				"9007199254740991",
			);
			assert.equal(
				renderToString(BigInt("123456789012345678901234567890")),
				"123456789012345678901234567890",
			);
		});

		it("should render booleans", () => {
			assert.equal(renderToString(true), "true");
			assert.equal(renderToString(false), "false");
		});
	});

	describe("iterables", () => {
		it("should render arrays of nodes", () => {
			const nodes = ["hello", " ", "world"];
			assert.equal(renderToString(nodes), "hello world");
		});

		it("should render nested arrays", () => {
			const nodes = [
				["nested", " "],
				["array", " ", "test"],
			];
			assert.equal(renderToString(nodes), "nested array test");
		});

		it("should render mixed type arrays", () => {
			const nodes = ["text", 123, true, null, undefined];
			assert.equal(renderToString(nodes), "text123true");
		});

		it("should render Sets", () => {
			const set = new Set(["a", "b", "c"]);
			assert.equal(renderToString(set), "abc");
		});

		it("should render custom iterables", () => {
			const customIterable = {
				*[Symbol.iterator]() {
					yield "custom";
					yield " ";
					yield "iterable";
				},
			};
			assert.equal(renderToString(customIterable), "custom iterable");
		});
	});

	describe("fragments", () => {
		it("should render fragments with children", () => {
			const fragment = {
				type: FRAGMENT,
				props: { children: ["fragment", " ", "content"] },
			};
			assert.equal(renderToString(fragment), "fragment content");
		});

		it("should render empty fragments", () => {
			const fragment = {
				type: FRAGMENT,
				props: {},
			};
			assert.equal(renderToString(fragment), "");
		});

		it("should render nested fragments", () => {
			const fragment = {
				type: FRAGMENT,
				props: {
					children: [
						"outer",
						{
							type: FRAGMENT,
							props: { children: [" inner "] },
						},
						"content",
					],
				},
			};
			assert.equal(renderToString(fragment), "outer inner content");
		});
	});

	describe("HTML elements", () => {
		it("should render simple elements", () => {
			const div = {
				type: "div",
				props: {},
			};
			assert.equal(renderToString(div), "<div></div>");
		});

		it("should render elements with text children", () => {
			const p = {
				type: "p",
				props: { children: "Hello world" },
			};
			assert.equal(renderToString(p), "<p>Hello world</p>");
		});

		it("should render elements with multiple children", () => {
			const div = {
				type: "div",
				props: { children: ["Hello", " ", "world"] },
			};
			assert.equal(renderToString(div), "<div>Hello world</div>");
		});

		it("should render nested elements", () => {
			const div = {
				type: "div",
				props: {
					children: {
						type: "span",
						props: { children: "nested" },
					},
				},
			};
			assert.equal(renderToString(div), "<div><span>nested</span></div>");
		});
	});

	describe("void elements", () => {
		const voidElements = [
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

		for (const tag of voidElements) {
			it(`should render ${tag} without closing tag`, () => {
				const element = { type: tag, props: {} };
				assert.equal(renderToString(element), `<${tag}>`);
			});

			it(`should throw error if ${tag} has children`, () => {
				const element = { type: tag, props: { children: "invalid" } };
				assert.throws(() => renderToString(element), {
					message: "Void elements cannot have children.",
				});
			});
		}

		it("should render void elements with attributes", () => {
			const img = {
				type: "img",
				props: { src: "image.jpg", alt: "Test image" },
			};
			assert.equal(
				renderToString(img),
				'<img src="image.jpg" alt="Test image">',
			);
		});
	});

	describe("attributes", () => {
		it("should render string attributes", () => {
			const div = {
				type: "div",
				props: { id: "test", className: "container" },
			};
			assert.equal(
				renderToString(div),
				'<div id="test" className="container"></div>',
			);
		});

		it("should render numeric attributes", () => {
			const input = {
				type: "input",
				props: { tabIndex: 0, maxLength: 100 },
			};
			assert.equal(
				renderToString(input),
				'<input tabIndex="0" maxLength="100">',
			);
		});

		it("should render boolean attributes", () => {
			const input = {
				type: "input",
				props: { disabled: true, required: true },
			};
			assert.equal(renderToString(input), "<input disabled required>");
		});

		it("should omit false boolean attributes", () => {
			const input = {
				type: "input",
				props: { disabled: false, required: false },
			};
			assert.equal(renderToString(input), "<input>");
		});

		it("should omit null and undefined attributes", () => {
			const div = {
				type: "div",
				props: { id: null, className: undefined, "data-test": "value" },
			};
			assert.equal(renderToString(div), '<div data-test="value"></div>');
		});

		it("should escape double quotes in attribute values", () => {
			const div = {
				type: "div",
				props: { title: 'He said "Hello"' },
			};
			assert.equal(
				renderToString(div),
				'<div title="He said &quot;Hello&quot;"></div>',
			);
		});

		it("should not render children attribute", () => {
			const div = {
				type: "div",
				props: { children: "text", id: "test" },
			};
			assert.equal(renderToString(div), '<div id="test">text</div>');
		});

		it("should throw error for illegal attribute names", () => {
			const illegalChars = [
				" ",
				'"',
				"'",
				">",
				"/",
				"=",
				"\u0000",
				"\u001F",
				"\uFDD0",
				"\uFDEF",
				"\uFFFF",
				"\uFFFE",
			];

			for (const char of illegalChars) {
				const div = {
					type: "div",
					props: { [`test${char}attr`]: "value" },
				};
				assert.throws(() => renderToString(div), {
					message: `Illegal attribute name: test${char}attr`,
				});
			}
		});

		it("should handle attributes with special characters in values", () => {
			const div = {
				type: "div",
				props: {
					"data-json": '{"key":"value"}',
					"data-html": "<span>test</span>",
					"data-special": "& < > ' \"",
				},
			};
			assert.equal(
				renderToString(div),
				'<div data-json="{&quot;key&quot;:&quot;value&quot;}" data-html="<span>test</span>" data-special="& < > \' &quot;"></div>',
			);
		});
	});

	describe("function components", () => {
		it("should render function components", () => {
			const Component = (props: { text: string }) => {
				return { type: "div", props: { children: props.text } };
			};
			const element = {
				type: Component,
				props: { text: "Hello from component" },
			};
			assert.equal(renderToString(element), "<div>Hello from component</div>");
		});

		it("should render nested function components", () => {
			const Inner = (props: { value: string }) => {
				return { type: "span", props: { children: props.value } };
			};
			const Outer = (props: { children: any }) => {
				return { type: "div", props: { children: props.children } };
			};
			const element = {
				type: Outer,
				props: {
					children: {
						type: Inner,
						props: { value: "nested" },
					},
				},
			};
			assert.equal(renderToString(element), "<div><span>nested</span></div>");
		});

		it("should render function components returning primitives", () => {
			const Component = () => "text content";
			const element = { type: Component, props: {} };
			assert.equal(renderToString(element), "text content");
		});

		it("should render function components returning null", () => {
			const Component = () => null;
			const element = { type: Component, props: {} };
			assert.equal(renderToString(element), "");
		});

		it("should render function components returning fragments", () => {
			const Component = () => ({
				type: FRAGMENT,
				props: { children: ["fragment", " ", "content"] },
			});
			const element = { type: Component, props: {} };
			assert.equal(renderToString(element), "fragment content");
		});

		it("should pass props correctly to function components", () => {
			const Component = (props: { a: number; b: string; c: boolean }) => {
				return `${props.a}-${props.b}-${props.c}`;
			};
			const element = {
				type: Component,
				props: { a: 42, b: "test", c: true },
			};
			assert.equal(renderToString(element), "42-test-true");
		});
	});

	describe("error handling", () => {
		it("should throw error for invalid JSX nodes", () => {
			const invalidNodes = [
				{ invalid: "object" },
				Symbol("test"),
				() => {},
				new Date(),
				/regex/,
			];

			for (const node of invalidNodes) {
				assert.throws(
					() => {
						console.log("render to string", renderToString(node as any));
					},
					{
						message: "Invalid JSX",
					},
				);
			}
		});

		it("should throw error for invalid component types", () => {
			const element = {
				type: 123,
				props: {},
			};
			assert.throws(() => renderToString(element as any), {
				message: "Invalid JSX",
			});
		});
	});

	describe("complex scenarios", () => {
		it("should render deeply nested structures", () => {
			const structure = {
				type: "div",
				props: {
					id: "root",
					children: [
						{
							type: "header",
							props: {
								children: {
									type: "h1",
									props: { children: "Title" },
								},
							},
						},
						{
							type: "main",
							props: {
								children: [
									{
										type: "p",
										props: { children: "Paragraph 1" },
									},
									{
										type: "p",
										props: { children: "Paragraph 2" },
									},
								],
							},
						},
					],
				},
			};
			assert.equal(
				renderToString(structure),
				'<div id="root"><header><h1>Title</h1></header><main><p>Paragraph 1</p><p>Paragraph 2</p></main></div>',
			);
		});

		it("should handle mixed content types", () => {
			const Component = (props: { value: number }) =>
				`Component: ${props.value}`;
			const mixed = {
				type: "div",
				props: {
					children: [
						"Text",
						123,
						null,
						{ type: "span", props: { children: "Element" } },
						{ type: Component, props: { value: 42 } },
						{ type: FRAGMENT, props: { children: [" Fragment "] } },
						["Array", " ", "Content"],
					],
				},
			};
			assert.equal(
				renderToString(mixed),
				"<div>Text123<span>Element</span>Component: 42 Fragment Array Content</div>",
			);
		});
	});
});

describe("normalizeChildren", () => {
	it("should return empty array for null", () => {
		assert.deepEqual(normalizeChildren(null), []);
	});

	it("should return empty array for undefined", () => {
		assert.deepEqual(normalizeChildren(undefined), []);
	});

	it("should wrap single values in array", () => {
		assert.deepEqual(normalizeChildren("text"), ["text"]);
		assert.deepEqual(normalizeChildren(123), [123]);
		assert.deepEqual(normalizeChildren(true), [true]);
	});

	it("should return arrays as-is", () => {
		const children = ["a", "b", "c"];
		assert.deepEqual(normalizeChildren(children), children);
	});

	it("should handle mixed types", () => {
		const mixed = ["text", 123, null, undefined, { type: "div", props: {} }];
		assert.deepEqual(normalizeChildren(mixed), mixed);
	});
});
