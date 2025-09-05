import { toSnakeCase } from "@/util/snake-case";

const LiquidObjectTypeId = Symbol("liquidx/object");

export abstract class LiquidObject {
	[LiquidObjectTypeId] = LiquidObjectTypeId;

	constructor(
		public readonly parent?: LiquidObject,
		public readonly path?: string,
	) {}

	toString(): string {
		const path: string[] = [];
		let current: LiquidObject | undefined = this;

		while (current) {
			path.push(current.path ?? toSnakeCase(current.constructor.name));
			current = current.parent;
		}

		return path.reverse().join(".");
	}

	static isLiquidObject(x: unknown): x is LiquidObject {
		return x != null && typeof x === "object" && LiquidObjectTypeId in x;
	}
}
