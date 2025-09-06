import { toSnakeCase } from "@/util/snake-case";

export const LiquidObjectTypeId = Symbol("liquidx/object");

export interface LiquidObjectConfig {
	delimiter(path: string): string;
	transformSegment(segment: string, delimiter: string): string;
}

export class LiquidObject {
	[LiquidObjectTypeId] = LiquidObjectTypeId;

	/** @internal */
	private _parent?: LiquidObject;
	/** @internal */
	private _path?: string;

	toString(): string {
		return toSnakeCase(this.constructor.name);
	}

	static isLiquidObject(x: unknown): x is LiquidObject {
		return x != null && typeof x === "object" && LiquidObjectTypeId in x;
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
					value._parent = this;
					value._path = fieldName;
				}

				return Object.assign(value as object, {
					toString: (): string => {
						let path = isHandle(fieldName)
							? `['${fieldName}']`
							: `${toSnakeCase(fieldName)}`;

						let current: LiquidObject | undefined = this;

						while (current) {
							const segment = current._path ?? current.toString();
							const delimiter = path.startsWith("[") ? "" : ".";
							const nextSegment = isHandle(segment)
								? `['${segment}']${path.endsWith("]") ? "" : "."}`
								: `${toSnakeCase(segment)}${delimiter}`;
							path = `${nextSegment}${path}`;
							current = current._parent;
						}

						return path;
					},
				}) as T;
			};
		};
	}
}

const isHandle = (path: string): boolean => path.includes("-");
