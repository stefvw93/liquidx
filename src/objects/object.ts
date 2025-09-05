import { toSnakeCase } from "@/util/snake-case";

const LiquidObjectTypeId = Symbol("liquidx/object");

export abstract class LiquidObject {
	[LiquidObjectTypeId] = LiquidObjectTypeId;

	#parent?: LiquidObject;
	#path?: string;

	static isLiquidObject(x: unknown): x is LiquidObject {
		return x != null && typeof x === "object" && LiquidObjectTypeId in x;
	}

	static property<T>() {
		return function decorator(
			_: undefined,
			context: ClassFieldDecoratorContext<LiquidObject, T>,
		) {
			return function (this: LiquidObject, value: T) {
				const fieldName = context.name as string;

				if (typeof fieldName === "symbol") {
					throw new Error("Symbol is not a valid Liquid property name");
				}

				if (value instanceof LiquidObject) {
					value.#parent = this;
					value.#path = fieldName;
				}

				return Object.assign(value as object, {
					toString: (): string => {
						let path = isHandle(fieldName)
							? `['${fieldName}']`
							: `${toSnakeCase(fieldName)}`;

						let current: LiquidObject | undefined = this;

						while (current) {
							const segment = current.#path ?? current.constructor.name;
							const nextSegment = isHandle(segment)
								? `['${segment}']`
								: `${toSnakeCase(segment)}${path.startsWith("[") ? "" : "."}`;
							path = `${nextSegment}${path}`;
							current = current.#parent;
						}

						return path;
					},
				}) as T;
			};
		};
	}
}

const isHandle = (path: string): boolean => path.includes("-");
