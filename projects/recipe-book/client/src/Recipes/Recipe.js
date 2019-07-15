import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from "../AppContext";

function Recipe(props) {
    const {title, image, prep, cook, ready, ingredients, directions, _id} = props.location.object.id.prop
    const prop = props.location.object.id.prop
    return (
        <div className='recipe-card'>
            <img src={image} alt=""/>
            <p className='card-title'>{title}</p>
            <div className='time'>
                <p>Prep Time: {prep}</p>
                <p>Cook Time: {cook}</p>
                <p>Ready In: {ready}</p>
            </div>
            <p>{ingredients}</p>
            <p>{directions}</p>
            <button>
                <Link to={{
                    pathname: '/edit-form',
                    object:{
                        id: {prop}
                    }
                }}>
                    <i className='fas fa-edit'></i>
                </Link>
            </button>
            <button onClick={() => props.deleteRecipe(_id)}>
                <Link to='/recipes'>
                    <i className='fas fa-times'></i>
                </Link>
            </button>
            <Link to='/recipes'>
                <button className='form-button'>
                    <i className='fas fa-reply'></i>
                </button>
            </Link>
        </div>
    )
}

export default withContext(Recipe);
