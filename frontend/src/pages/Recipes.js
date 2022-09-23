import React from "react";
import { Link } from "react-router-dom";

export default () => {
	const [recipes, setRecipes] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			const { success, data } = await (
				await fetch("http://localhost:5000/recipes")
			).json();

			setRecipes(data);
		})();
	}, []);

	return recipes.length
		? recipes.map(({ title, id }) => (
				<Link to={`/recipe/${id}`}>{title}</Link>
		  ))
		: "Loading";
};
