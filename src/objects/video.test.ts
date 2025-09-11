import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { video } from "./video";

describe("Objects/video", () => {
	test("video properties", () => {
		strictEqual(String(video), "video");
		strictEqual(String(video.alt), "video.alt");
		strictEqual(String(video.aspectRatio), "video.aspect_ratio");
		strictEqual(String(video.duration), "video.duration");
		strictEqual(String(video.id), "video.id");
		strictEqual(String(video.mediaType), "video.media_type");
		strictEqual(String(video.position), "video.position");
		strictEqual(String(video.previewImage), "video.preview_image");
		strictEqual(String(video.sources), "video.sources");
	});
});
