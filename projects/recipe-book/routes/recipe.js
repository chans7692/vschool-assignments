const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipe");

recipeRouter.get("/", (req, res, next) => {
    Recipe.find({ user: req.user._id }, (err, recipes) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(recipes);
    });
});

recipeRouter.post("/", (req, res, next) => {
    const recipe = new Recipe(req.body);
    recipe.user = req.user._id;
    console.log(recipe)
    recipe.save(function (err, newRecipe) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newRecipe);
    });
});

recipeRouter.get("/:recipeId", (req, res, next) => {
    Recipe.findOne({ _id: req.params.recipeId, user: req.user._id }, (err, recipe) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!recipe) {
            res.status(404)
            return next(new Error("No recipe item found."));
        }
        return res.send(recipe);
    });
});

recipeRouter.put("/:recipeId", (req, res, next) => {
    Recipe.findOneAndUpdate(
        { _id: req.params.recipeId, user: req.user._id },
        req.body,
        { new: true },
        (err, recipe) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(recipe);
        }
    );
});

recipeRouter.delete("/:recipeId", (req, res, next) => {
    Recipe.findOneAndRemove({ _id: req.params.recipeId, user: req.user._id }, (err, recipe) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(recipe);
    });
});

module.exports = recipeRouter;
