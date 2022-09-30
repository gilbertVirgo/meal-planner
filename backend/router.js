const Ingredient = require("./models/Ingredient");
const Recipe = require("./models/Recipe");

const { Router } = require("express");
const router = Router();

router.get("/recipes", async (req, res, next) => {
	res.locals.data = await Recipe.find().catch(next);
	next();
});

router.get("/recipe/:id", async ({ params }, res, next) => {
	res.locals.data = await Recipe.findOne(params.id).catch(next);
	next();
});

router.get("/recipe/:id/ingredients", async ({ params }, res, next) => {
	const recipe = await Recipe.findOne(params.id).catch(next);
	res.locals.data = await Ingredient.find(recipe.ingredients);
	next();
});

router.get("/ingredients", async (req, res, next) => {
	res.locals.data = await Ingredient.find().catch(next);
	next();
});

router.put("/ingredients", async ({ body }, res, next) => {
	await Ingredient.insertOne(body);
	res.locals.data = undefined;
	next();
});

router.get("/ingredient/:id", async ({ params }, res, next) => {
	res.locals.data = await Ingredient.findOne(params.id).catch(next);
	next();
});

module.exports = router;
