import { DataType, Primitive } from "./data";
import { LiquidObject } from "./object";

function createDictionary(isArray?: boolean) {
	return class Dictionary<T extends LiquidObject> extends LiquidObject {
		constructor(type: () => T) {
			super();

			// biome-ignore lint/correctness/noConstructorReturn: need some meta programming here
			return new Proxy(this, {
				get(target, property, receiver) {
					if (property in target || typeof property === "symbol") {
						return Reflect.get(target, property, receiver);
					}

					const value =
						isArray && property === "totalCount"
							? LiquidObject.property()(undefined, {
									name: property,
									addInitializer(_: () => void) {},
								} as ClassFieldDecoratorContext<
									LiquidObject,
									LiquidObject
								>).bind(target)(new DataType(Primitive.number))
							: LiquidObject.property()(undefined, {
									name: property,
									addInitializer(_: () => void) {},
								} as ClassFieldDecoratorContext<
									LiquidObject,
									LiquidObject
								>).bind(target)(type());

					Object.defineProperty(target, property, {
						value,
						writable: false,
						configurable: false,
					});

					return Reflect.get(target, property, receiver);
				},
			});
		}
	};
}

/** @internal */
const Dictionary = createDictionary() as new <T>(
	type: () => T,
) => LiquidObject & {
	[property: string]: T;
};

type LiquidArray = new <T>(
	type: () => T,
) => LiquidObject & {
	[property: number]: T;
};

/** @internal */
const LiquidArray = createDictionary(true) as unknown as new <T>(
	type: () => T,
) => LiquidObject & {
	[property: number]: T;
	totalCount: DataType<Primitive.number>;
};

export { Dictionary, LiquidArray };
