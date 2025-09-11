import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { videoSource } from "./video-source";

describe("Objects/videoSource", () => {
	test("videoSource properties", () => {
		strictEqual(String(videoSource), "video_source");
		strictEqual(String(videoSource.format), "video_source.format");
		strictEqual(String(videoSource.height), "video_source.height");
		strictEqual(String(videoSource.mimeType), "video_source.mime_type");
		strictEqual(String(videoSource.url), "video_source.url");
		strictEqual(String(videoSource.width), "video_source.width");
	});
});