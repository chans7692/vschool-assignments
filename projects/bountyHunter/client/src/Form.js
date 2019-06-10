import React, {Component} from 'react'
import {withBounty} from './BountyProvider'

class Form extends Component{
    constructor(){
        super()
        
        this.state = {
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: '',
            isAlive: false,
            id: ''
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
        this.props.addBounty(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: '',
            isAlive: false            
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder='First Name' 
                    onChange={this.handleChange}/>
                    <br></br>
                <input type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    placeholder='Last Name' 
                    onChange={this.handleChange}/>
                    <br></br>
                <input list="type" 
                    name="type" 
                    value={this.state.type} 
                    placeholder='Jedi or Sith' 
                    onChange={this.handleChange}/>
                <datalist id='type'>
                    <option value='Jedi'>Jedi</option>
                    <option value='Sith'>Sith</option>
                </datalist>
                    <br></br>
                <input type="text" 
                    name="bountyAmount" 
                    value={this.state.bountyAmount} 
                    placeholder='What are They Worth' 
                    onChange={this.handleChange}/>
                    <br></br>
                <label htmlFor="isAlive">Is Alive?
                    <input type="checkbox" 
                        name="isAlive" 
                        id="isAlive" 
                        value={this.state.isAlive}
                        onChange={this.handleChange}/>
                    </label>
                    <br></br>
                <button>Submit</button>
            </form>
        )
    }
}

export default withBounty(Form)