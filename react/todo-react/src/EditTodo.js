import React, {Component} from 'react'

class EditTodo extends Component{
    constructor(){
        supper()
        this.state = {
            title: '',
            checked: false,
        }
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

export default EditTodo