import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withContext } from "./AppContext"

class Navbar extends Component {


render () {
    return (
        <nav className="navbar-wrapper">
                <input className='search' type="text" placeholder="Search.." name="search" onChange={this.props.search} />
            {
                !this.props.token ?
                <React.Fragment>
                    <Link to="/login">
                        <button className='log-out'>
                            <i className='fas fa-sign-in-alt'></i>
                        </button>
                    </Link>
                </React.Fragment>
                :
                <React.Fragment>
                    <button className='log-out' onClick={() => this.props.logout()}>
                        <Link to='/recipes'>
                            <i className='fas fa-sign-out-alt'></i>
                        </Link>
                    </button>
                </React.Fragment>
            }
        </nav>
    )}
}

export default withContext(Navbar);