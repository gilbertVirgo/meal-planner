import React from "react";
import get from "../api/get";
import post from "../api/post";

export default () => {
	const [ingredients, setIngredients] = React.useState([]);

	React.useEffect(() => {
		// Note this new syntax. Way cleaner.
		get("ingredients").then(setIngredients);
	}, []);

	const handleNewIngredient = async (event) => {
		event.preventDefault();

		if (event.target.checkValidity()) {
			console.log({ event });

			// await post("ingredients", event.formData);
		}
	};

	return ingredients.length ? (
		<React.Fragment>
			<ul>
				{ingredients.map(({ title }) => (
					<li>{title}</li>
				))}
			</ul>

			<form onSubmit={handleNewIngredient}>
				<h3>Create a new ingredient</h3>

				<p>Name</p>
				<input name="title" required />

				<p>Price (not required)</p>
				<input name="price" />

				<button type="submit">Create new ingredient</button>
			</form>
		</React.Fragment>
	) : (
		"Loading..."
	);
};
