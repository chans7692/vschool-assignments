import React, { Component } from 'react';
import { withContext } from "../AppContext";
import { Link } from "react-router-dom";

class EditForm extends Component {
    constructor(props) {
    const {title, image, prep, cook, ready, ingredients, directions, _id} = props.location.object.id.prop
        super();
        this.state = {
            title:title,
            image: image,
            prep: prep,
            cook: cook,
            ready: ready,
            ingredients: ingredients,
            directions: directions,
            id: _id 
        }
    }

    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editRecipe(this.state.id, this.state)
            .then(() => this.props.history.push("/recipes"))
            .catch(err => console.error(err.response.data.message))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Recipe</h1>
                    <input type="text" 
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleChange}
                        required/>
                        <br></br>
                    <input type="file" 
                        name="image" 
                        value={this.state.image}  
                        onChange={this.handleChange} />
                        <br></br>
                    <input type="text" 
                        name="prep" 
                        value={this.state.prep} 
                        placeholder='Prep Time' 
                        onChange={this.handleChange}/>
                        <br></br>
                    <input type="text" 
                        name="cook" 
                        value={this.state.cook} 
                        placeholder='Cook Time' 
                        onChange={this.handleChange}/>
                        <br></br>
                    <input type="text" 
                        name="ready" 
                        value={this.state.ready} 
                        placeholder='Ready Time' 
                        onChange={this.handleChange}/>
                        <br></br>
                    <textarea
                        name="ingredients" 
                        value={this.state.ingredients}
                        onChange={this.handleChange}
                        rows='4'
                        cols='3o'></textarea>
                        <br></br>
                    <textarea 
                        name="directions" 
                        value={this.state.directions}
                        onChange={this.handleChange}
                        rows='4'
                        cols='3o'></textarea>
                        <br></br>
                    <button type='submit'>Submit</button>
                </form>
                <Link to='/recipes'><button className='form-button'><i className='fas fa-times'></i></button></Link>
            </div>
        )
    }
}

export default withContext(EditForm);
