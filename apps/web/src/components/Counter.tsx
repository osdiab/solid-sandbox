import { type Component, createSignal } from "solid-js";
import { button } from "~gen/pandacss/recipes";

export const Counter: Component = () => {
	const [count, setCount] = createSignal(0);
	return (
		<button
			class={button()}
			onClick={() => setCount(count() + 1)}
			type="button"
		>
			Clicks: {count()}
		</button>
	);
};
