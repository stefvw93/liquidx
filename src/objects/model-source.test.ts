import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { modelSource } from "./model-source";

describe("Objects/modelSource", () => {
	test("modelSource properties", () => {
		strictEqual(String(modelSource), "model_source");
		strictEqual(String(modelSource.format), "model_source.format");
		strictEqual(String(modelSource.mimeType), "model_source.mime_type");
		strictEqual(String(modelSource.url), "model_source.url");
	});
});
