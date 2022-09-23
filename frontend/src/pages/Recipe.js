import React from "react";

import { useParams } from "react-router-dom";

export default () => {
	const { id } = useParams();

	const [recipe, setRecipe] = React.useState();
	const [ingredients, setIngredients] = React.useState();

	React.useEffect(() => {
		(async function () {
			const { data: recipe } = await (
				await fetch(`http://localhost:5000/recipe/${id}`)
			).json();

			const { data: ingredients } = await (
				await fetch(`http://localhost:5000/recipe/${id}/ingredients`)
			).json();

			setRecipe(recipe);
			setIngredients(ingredients);
		})();
	}, []);

	return recipe ? (
		<React.Fragment>
			<h1>{recipe.title}</h1>
			<hr />
			<h4>Ingredients</h4>
			<ul>
				{ingredients.map(({ title }) => (
					<li>{title}</li>
				))}
			</ul>
		</React.Fragment>
	) : (
		"Loading"
	);
};
