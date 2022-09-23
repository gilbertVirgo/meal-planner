import { Route, Switch } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";

function App() {
	return (
		<main>
			<h1>Meal Planner</h1>

			<Switch>
				<Route path="/ingredients" component={Ingredients} />
				<Route path="/recipes" component={Recipes} />
				<Route path="/recipe/:id" component={Recipe} />
			</Switch>
		</main>
	);
}

export default App;
