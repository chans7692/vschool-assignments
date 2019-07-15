const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    prep: {
        type: String,
        require: true
    },
    cook: {
        type: String,
        require: true
    },
    ready: {
        type: String,
        require: true
    },
    ingredients: {
        type: String,
        require: true
    },
    directions: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Recipe", recipeSchema);