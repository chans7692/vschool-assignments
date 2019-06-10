import React, { Component } from 'react';
import Badge from './Badge'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            lName: '',
            email: '',
            birth: '',
            phone: '',
            food: '',
            about: '',
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
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            birth: this.state.birth,
            phone: this.state.phone,
            food: this.state.food,
            about: this.state.about
        }

        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })
    }

    render() {

        const mappedPeople = this.state.people.map((badge)=>{
            return <Badge card={badge}/>
        })

        return (
            <>
                <form id='badge-form' onSubmit={this.handleSubmit} >
                    <input  type="text" 
                            name="fName"
                            placeholder="First Name"
                            value={this.state.fName}
                            onChange={this.handleChange}
                            pattern=".{3,}"
                            required title="3 characters minimum"
                            required />
                    <input  type="text" 
                            name="lName"
                            placeholder="Last Name"
                            value={this.state.lName}
                            onChange={this.handleChange}
                            pattern=".{3,}"
                            required title="3 characters minimum"
                            required />
                    <input  type="email" 
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            pattern=".{3,}"
                            required title="3 characters minimum"
                            required />
                    <input  type="text" 
                            name="birth"
                            placeholder="Place Of Birth"
                            value={this.state.birth}
                            onChange={this.handleChange}
                            pattern=".{3,}"
                            required title="3 characters minimum"
                            required />
                    <input  type="tel" 
                            name="phone"
                            placeholder="Phone Number"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            pattern='\d{10}$'
                            required />
                    <input  type="text" 
                            name="food"
                            placeholder="Favorite Food"
                            value={this.state.food}
                            onChange={this.handleChange}
                            pattern=".{3,}"
                            required title="3 characters minimum"
                            required />
                    <textarea name="about" cols="30" rows="10"
                            placeholder='Tell us about yourself'
                            value={this.state.about}
                            onChange={this.handleChange}
                            pattern=".{3,}"
                            required title="3 characters minimum"
                            required></textarea>
                    <button>Submit</button>
                </form>
                {mappedPeople}
            </>
        );
    }
}

export default Form;