import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { model } from "./model";

describe("Objects/model", () => {
	test("model properties", () => {
		strictEqual(String(model), "model");
		strictEqual(String(model.alt), "model.alt");
		strictEqual(String(model.id), "model.id");
		strictEqual(String(model.mediaType), "model.media_type");
		strictEqual(String(model.position), "model.position");
		strictEqual(String(model.previewImage), "model.preview_image");
		strictEqual(String(model.sources), "model.sources");
	});
});
