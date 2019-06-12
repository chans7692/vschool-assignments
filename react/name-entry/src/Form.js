import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            people: []
        }
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const newPerson = {
            name: this.state.name,
        }

        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })
    }

    render() {

        const mappedPeople = this.state.people.map((person)=>{
            return <li>{person.name}</li>
        })

        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <input  type="text" 
                            name="name"
                            placeholder="First Name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <h1>{this.state.name}</h1>
                <ul>{mappedPeople}</ul>
            </>
        );
    }
}

export default Form;