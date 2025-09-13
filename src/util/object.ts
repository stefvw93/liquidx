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

	/** @internal */
	private static propertyToString(
		instance: LiquidObject,
		fieldName: string,
		fieldNameIsNumber: boolean,
		fieldNameNeedsBrackets: boolean,
	): string {
		let path: string;

		if (fieldNameIsNumber) {
			path = `[${fieldName}]`;
		} else if (fieldNameNeedsBrackets) {
			path = `['${fieldName}']`;
		} else {
			path = toSnakeCase(fieldName);
		}

		let current: LiquidObject | undefined = instance;

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
	}

	/** @internal */
	private static enhanceWithLiquidObject<T extends LiquidObject>(
		value: T,
		parent: LiquidObject,
		fieldName: string,
		fieldNameIsNumber: boolean,
		fieldNameNeedsBrackets: boolean,
	): T {
		if (value instanceof LiquidObject) {
			value._parent = parent;
			value._path = fieldName;
		}

		return Object.assign(value as object, {
			toString: (): string =>
				LiquidObject.propertyToString(
					parent,
					fieldName,
					fieldNameIsNumber,
					fieldNameNeedsBrackets,
				),
		}) as T;
	}

	static property<T extends LiquidObject>(): {
		(
			target: T,
			context: ClassFieldDecoratorContext<LiquidObject, T>,
		): (this: LiquidObject, value: T) => T;
		(
			target: () => T,
			context: ClassGetterDecoratorContext<LiquidObject, T>,
		): (this: LiquidObject) => T;
	} {
		return function decorator(
			target,
			context:
				| ClassFieldDecoratorContext<LiquidObject, T>
				| ClassGetterDecoratorContext<LiquidObject, T>,
		) {
			if (typeof context.name === "symbol") {
				throw new Error("Symbol is not a valid Liquid property name");
			}

			const fieldName = context.name;
			const fieldNameIsNumber = isNumber(fieldName);
			const fieldNameNeedsBrackets = needsBracketNotation(fieldName);

			// Handle getters differently from regular properties
			if (context.kind === "getter") {
				// For getters, we receive the getter function as the target
				const originalGetter = target as () => LiquidObject;

				// For getters, we need to wrap the getter function
				return function (this: LiquidObject): T {
					// Call the original getter
					const value = originalGetter.call(this);

					if (!value) return value;

					// If it's a LiquidObject, enhance it with parent/path info and toString
					if (value instanceof LiquidObject) {
						return LiquidObject.enhanceWithLiquidObject(
							value as T,
							this,
							fieldName,
							fieldNameIsNumber,
							fieldNameNeedsBrackets,
						);
					}

					return value;
				};
			}

			// For proxied dictionary properties, use the class field initializer.
			context.addInitializer(function () {
				// make the property readonly
				Object.defineProperty(this, context.name, {
					value: this[context.name as keyof LiquidObject],
					writable: false,
					configurable: false,
				});
			});

			return function (this: LiquidObject, value: T) {
				return LiquidObject.enhanceWithLiquidObject<T>(
					value as T,
					this,
					fieldName,
					fieldNameIsNumber,
					fieldNameNeedsBrackets,
				);
			};
		} as ReturnType<typeof LiquidObject.property<T>>;
	}
}

const needsBracketNotation = (path: string): boolean => /[-?]/.test(path);
const isNumber = (path: string): boolean => !Number.isNaN(Number(path));
