const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const chefdata = require("./data/chefData.json");
const recipeData = require("./data/RecipeData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("The Recipe Server is Running");
});

app.get("/recipedata", (req, res) => {
  res.send(recipeData);
});

app.get("/recipedata/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const findRecipe = recipeData.find((recipe) => recipe.id === id);

  res.send(findRecipe);
});

app.get("/chefdata", (req, res) => {
  res.send(chefdata);
});

app.listen(port, () => {
  console.log(`Server is Running On ${port} `);
});
