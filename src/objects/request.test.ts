import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { request } from "./request";

describe("Objects/request", () => {
	test("request properties", () => {
		strictEqual(String(request), "request");
		strictEqual(String(request.designMode), "request.design_mode");
		strictEqual(String(request.host), "request.host");
		strictEqual(String(request.locale), "request.locale");
		strictEqual(String(request.origin), "request.origin");
		strictEqual(String(request.pageType), "request.page_type");
		strictEqual(String(request.path), "request.path");
		strictEqual(
			String(request.visualPreviewMode),
			"request.visual_preview_mode",
		);
	});
});
