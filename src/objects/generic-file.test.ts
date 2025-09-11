import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { genericFile } from "./generic-file";

describe("Objects/genericFile", () => {
	test("genericFile properties", () => {
		strictEqual(String(genericFile), "generic_file");
		strictEqual(String(genericFile.alt), "generic_file.alt");
		strictEqual(String(genericFile.id), "generic_file.id");
		strictEqual(String(genericFile.mediaType), "generic_file.media_type");
		strictEqual(String(genericFile.position), "generic_file.position");
		strictEqual(String(genericFile.previewImage), "generic_file.preview_image");
		strictEqual(String(genericFile.url), "generic_file.url");
	});
});