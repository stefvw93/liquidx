import type { JSXNode, PropsWithChildren } from "~/jsx-runtime";

export const provideId = Symbol("liquidx/provide");

export type Provider<T> = ((
	props: PropsWithChildren<{ value: T }>,
) => JSXNode) & {
	[provideId]: typeof provideId;
	getContext(): Context<T>;
};

export class Context<T> {
	Provide = (props: PropsWithChildren<{ value: T }>): JSXNode => {
		console.log("provide", props);
		return props.children;
	};

	constructor(readonly value: () => T) {
		Object.defineProperties(this.Provide, {
			[provideId]: { value: provideId },
			getContext: { value: () => this },
		});
	}

	static live = new Map<Context<unknown>, unknown>();

	static inject = <T>(type: Context<T>) => {
		const context = this.live?.get(type as Context<unknown>);

		if (!context) {
			throw new Error("Context not found");
		}

		return context as T;
	};

	static isProvider(x: unknown): x is Provider<unknown> {
		return x != null && typeof x === "function" && provideId in x;
	}
}
