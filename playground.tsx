import { Echo, Liquid } from "@/tags/syntax";
import { Context } from "@/util/context";
import { renderToString } from "@/util/renderer";

const myContext = new Context(() => "provided-value");

const MyInjector = (props: object) => {
	const injected = Context.inject(myContext);
	return <div>{`injected: ${injected}`}</div>;
};

const ShouldThrow = (props: object) => {
	const injected = Context.inject(myContext);
	return <div>{`injected: ${injected}`}</div>;
};

const MyComponent = () => {
	return (
		<>
			<Echo>expression</Echo>
			{"\n"}
			<Liquid>
				<Echo>expression</Echo>
			</Liquid>
		</>
	);
};

console.log(renderToString(<MyComponent />));
