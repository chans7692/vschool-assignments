import React from 'react';
import Recipes from "./Recipes";
import { withContext } from "../AppContext";
import { Link } from "react-router-dom";

function RecipeList(props) {
    const recipes = props.filtered.map(recipe => {
        return (
            <Recipes
                key={recipe._id}
                recipe={recipe}
                editRecipe={props.editRecipe}
                deleteRecipe={props.deleteRecipe}
            />
        )
    })

    return (
        <main>
            {recipes}
            <Link to='/form'><button className='form-button'><i className='fas fa-plus'></i></button></Link>
        </main>
    )
}

export default withContext(RecipeList);
