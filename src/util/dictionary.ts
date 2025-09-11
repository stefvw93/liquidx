import { DataType, Primitive } from "./data";
import { LiquidObject } from "./object";

function createDictionary(isArray?: boolean) {
	return class Dictionary<T extends LiquidObject> extends LiquidObject {
		constructor(private readonly _type: () => T) {
			super();

			// biome-ignore lint/correctness/noConstructorReturn: need some meta programming here
			return new Proxy(this, {
				get(target, property, receiver) {
					if (property in target || typeof property === "symbol") {
						return Reflect.get(target, property, receiver);
					}

					const decoratorContext = {
						name: property,
						addInitializer(_: () => void) {},
					} as ClassFieldDecoratorContext<LiquidObject, LiquidObject>;

					const decoratorImpl = LiquidObject.property()(
						new LiquidObject(), // placeholder
						decoratorContext,
					).bind(target);

					const value =
						isArray && property === "totalCount"
							? decoratorImpl(new DataType(Primitive.number))
							: decoratorImpl(_type());

					Object.defineProperty(target, property, {
						value,
						writable: false,
						configurable: false,
					});

					return Reflect.get(target, property, receiver);
				},
			});
		}

		get type() {
			return this._type();
		}
	};
}

/** @internal */
const Dictionary = createDictionary() as new <T>(
	type: () => T,
) => LiquidObject & {
	[property: string]: T;
	type: T;
};

type LiquidArray<T extends LiquidObject> = LiquidObject & {
	[property: number]: T;
	type: T;
	totalCount: DataType<Primitive.number>;
};

const LiquidArray = createDictionary(true) as unknown as new <
	T extends LiquidObject,
>(
	type: () => T,
) => LiquidArray<T>;

export { Dictionary, LiquidArray };
