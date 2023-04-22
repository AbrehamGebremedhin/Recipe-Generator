const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Recipe', RecipeSchema);