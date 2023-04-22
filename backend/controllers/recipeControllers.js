const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Recipe = require('../models/Recipe');

exports.getRecipes = asyncHandler(async (req, res, next) => { 
    res.status(200).json(res.advancedResults);
});

exports.getRecipe = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
        return next(new ErrorResponse(`Recipe not found using ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: recipe
    });
});



