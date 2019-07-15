import React, { Component } from 'react';
import { withContext } from "../AppContext";
import { Link } from "react-router-dom";

class AddRecipeForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            image: '',
            prep: '',
            cook: '',
            ready: '',
            ingredients: '',
            directions: ''  
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
        this.props.addRecipes(this.state)
            .then(() => this.props.history.push("/recipes"))
            .catch(err => console.error(err.response.data.message))
    }

    render() {
        console.log(this.state.image)
        return (
            <div>
                <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <h1>Add Recipe</h1>
                    <input type="image" src={this.state.image} alt=''/>
                    <input type="text" 
                        name="title" 
                        value={this.state.title} 
                        placeholder='Recipe Title' 
                        onChange={this.handleChange} />
                        <br></br>
                    <input type="file" 
                        name="image" 
                        value={this.state.image}  
                        onChange={this.handleChange}/>
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
                        placeholder='Ingredients' 
                        onChange={this.handleChange}
                        rows='4'
                        cols='3o'></textarea>
                        <br></br>
                    <textarea 
                        name="directions" 
                        value={this.state.directions} 
                        placeholder='Directions' 
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

export default withContext(AddRecipeForm);
