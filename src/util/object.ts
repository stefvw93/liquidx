import { toSnakeCase } from "@/util/snake-case";

const LiquidObjectTypeId = Symbol("liquidx/object");

export interface LiquidObjectConfig {
	delimiter(path: string): string;
	transformSegment(segment: string, delimiter: string): string;
}

export abstract class LiquidObject {
	[LiquidObjectTypeId] = LiquidObjectTypeId;

	parent?: LiquidObject;
	#path?: string;

	toString(): string {
		return toSnakeCase(this.constructor.name);
	}

	static isLiquidObject(x: unknown): x is LiquidObject {
		return x != null && typeof x === "object" && LiquidObjectTypeId in x;
	}

	static toPath(fieldName: string, context: LiquidObject): string {
		let path = isHandle(fieldName)
			? `['${fieldName}']`
			: `${toSnakeCase(fieldName)}`;

		let current: LiquidObject | undefined = context;

		while (current) {
			const segment = current.#path ?? current.toString();
			const delimiter = path.startsWith("[") ? "" : ".";
			const nextSegment = isHandle(segment)
				? `['${segment}']`
				: `${toSnakeCase(segment)}${delimiter}`;
			path = `${nextSegment}${path}`;
			current = current.parent;
		}

		return path;
	}

	static property<T extends LiquidObject>() {
		return function decorator(
			_: undefined,
			context: ClassFieldDecoratorContext<LiquidObject, T>,
		) {
			return function (this: LiquidObject, value: LiquidObject) {
				const fieldName = context.name as string;

				if (typeof fieldName === "symbol") {
					throw new Error("Symbol is not a valid Liquid property name");
				}

				if (value instanceof LiquidObject) {
					value.parent = this;
					value.#path = fieldName;
				}

				return Object.assign(value as object, {
					toString: (): string => LiquidObject.toPath(fieldName, this),
				}) as T;
			};
		};
	}
}

const isHandle = (path: string): boolean => path.includes("-");
