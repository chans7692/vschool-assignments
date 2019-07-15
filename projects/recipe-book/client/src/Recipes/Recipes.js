import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withContext } from "../AppContext";

class Recipes extends Component {

    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
    const prop = this.props.recipe    
        return (
        <div className='recipe-item'>
            <Link to={{
                pathname: '/recipe',
                object:{
                    id: {prop}
                }
            }}>
                <img className='thumbnail' src={this.props.recipe.image} alt=""/>
                <div className='description'>
                    <h3>{this.props.recipe.title}</h3>
                    <div className='time'>
                        <p>Prep Time: {this.props.recipe.prep}</p>
                        <p>Cook Time: {this.props.recipe.cook}</p>
                        <p>Ready In: {this.props.recipe.ready}</p>
                    </div>
                </div>
            </Link>
        </div>
    )}

}

export default withContext(Recipes);
