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
				if (typeof context.name === "symbol") {
					throw new Error("Symbol is not a valid Liquid property name");
				}

				const fieldName = context.name;
				const fieldNameIsNumber = isNumber(fieldName);
				const fieldNameNeedsBrackets = needsBracketNotation(fieldName);

				if (value instanceof LiquidObject) {
					value._parent = this;
					value._path = fieldName;
				}

				return Object.assign(value as object, {
					toString: (): string => {
						let path: string;

						if (fieldNameIsNumber) {
							path = `[${fieldName}]`;
						} else if (fieldNameNeedsBrackets) {
							path = `['${fieldName}']`;
						} else {
							path = toSnakeCase(fieldName);
						}

						let current: LiquidObject | undefined = this;

						while (current) {
							const segment = current._path ?? current.toString();
							const delimiter = path.startsWith("[") ? "" : ".";
							const segmentNeedsBrackets = needsBracketNotation(segment);
							const segmentIsNumber = isNumber(segment);
							const suffix = path.endsWith("]") ? "" : ".";

							let nextSegment: string;

							if (segmentIsNumber) {
								nextSegment = `[${segment}]${suffix}`;
							} else if (segmentNeedsBrackets) {
								nextSegment = `['${segment}']${suffix}`;
							} else {
								nextSegment = `${toSnakeCase(segment)}${delimiter}`;
							}

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

const needsBracketNotation = (path: string): boolean => /[-?]/.test(path);
const isNumber = (path: string): boolean => !Number.isNaN(Number(path));
