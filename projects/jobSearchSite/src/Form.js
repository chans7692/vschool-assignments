import React, {Component} from 'react'
import {withGlobal} from './GlobalProvider'

class Form extends Component{
    constructor(){
        super()
        
        this.state = {
            description: [],
            location: [],
            fullTime: false
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
        this.props.getJobs(this.state)
        this.setState({
            description: [],
            location: [],
            fullTime: false
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <input type="text" 
                    name="description" 
                    value={this.state.description} 
                    placeholder='Job Description' 
                    onChange={this.handleChange}/>

                <input type="text" 
                    name="location" 
                    value={this.state.location} 
                    placeholder='Location' 
                    onChange={this.handleChange}/>

                <label htmlFor="fullTime">Full Time?
                    <input type="checkbox" 
                        name="fullTime" 
                        id="fullTime" 
                        value={this.state.fullTime}
                        onChange={this.handleChange}/>
                    </label>

                <button>Submit</button>

            </form>
        )
    }
}

export default withGlobal(Form)