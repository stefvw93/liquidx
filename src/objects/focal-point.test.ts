import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { focalPoint } from "./focal-point";

describe("Objects/focalPoint", () => {
	test("focalPoint properties", () => {
		strictEqual(String(focalPoint), "focal_point");
		strictEqual(String(focalPoint.x), "focal_point.x");
		strictEqual(String(focalPoint.y), "focal_point.y");
	});
});