import { Route, Switch } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";
import NewRecipe from "./pages/NewRecipe";

function App() {
	return (
		<main>
			<h1>Meal Planner</h1>

			<Switch>
				<Route path="/ingredients" component={Ingredients} />
				<Route path="/recipes" component={Recipes} />
				<Route path="/recipe/:id" component={Recipe} />
				<Route path="/new-recipe" component={NewRecipe} />
			</Switch>
		</main>
	);
}

export default App;
