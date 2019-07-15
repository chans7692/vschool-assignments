import React, { Component } from 'react';
import { withContext } from "../AppContext"
import { Link } from "react-router-dom";

class LoginForm extends Component {
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
        this.props.login(this.state)
            .then(() => this.props.history.push("/recipes"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h1>Log In</h1>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                            <button type="submit">Log In</button>
                            <Link to="/signup">
                                <button>Sign Up</button>
                            </Link>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withContext(LoginForm);