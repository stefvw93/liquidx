import { LiquidObject } from "./object";

/** @internal */
const Dictionary = class Dictionary<
	T extends LiquidObject,
> extends LiquidObject {
	constructor(type: () => T) {
		super();

		// biome-ignore lint/correctness/noConstructorReturn: need some meta programming here
		return new Proxy(this, {
			get(target, property, receiver) {
				if (property in target || typeof property === "symbol") {
					return Reflect.get(target, property, receiver);
				}

				const value = LiquidObject.property()(undefined, {
					name: property,
					addInitializer(_: () => void) {},
				} as ClassFieldDecoratorContext<LiquidObject, LiquidObject>).bind(
					target,
				)(type());

				Object.defineProperty(target, property, {
					value,
					writable: false,
					configurable: false,
				});

				return Reflect.get(target, property, receiver);
			},
		});
	}
} as new <T>(
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
const LiquidArray = Dictionary as new <T>(
	type: () => T,
) => LiquidObject & {
	[property: number]: T;
};

export { Dictionary, LiquidArray };
