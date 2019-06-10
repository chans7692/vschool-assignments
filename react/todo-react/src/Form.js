import React, {Component} from 'react'
import {withTodos} from './TodoProvider'

class Form extends Component{
    constructor(){
        super()
        
        this.state = {
            title: '',
            completed: false
        }
    }

    handleChange = (event) => {
        const {name} = event.target
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="title" 
                    value={this.state.title} 
                    placeholder='name' 
                    onChange={this.handleChange}/>
                    <br></br>
                <label htmlFor="isComplete">Is Complete?
                    <input type="checkbox" 
                        name="completed" 
                        id="isComplete" 
                        value={this.state.completed}
                        onChange={this.handleChange}/>
                    </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default withTodos(Form)