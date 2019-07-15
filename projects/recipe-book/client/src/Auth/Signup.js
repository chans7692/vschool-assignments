import React, { Component } from 'react';
import { withContext } from "../AppContext"

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/recipes"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="email"
                        placeholder="Username"
                        required/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        required/>
                    <button type="submit">Create Account</button>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withContext(Signup);



