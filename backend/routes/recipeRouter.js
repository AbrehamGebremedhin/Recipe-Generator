const express = require('express');
const { getRecipes, getRecipe } = require('../controllers/recipeControllers');
const Recipe = require('../models/Recipe');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(advancedResults(Recipe), getRecipes);

router
  .route('/:id')
  .get(getRecipe);

module.exports = router;