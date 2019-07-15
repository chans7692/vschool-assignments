import React, { Component } from 'react';
import { withGlobal } from './GlobalProvider'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Resume from './Resume';
import './stylesheets/App.css'
import './stylesheets/Media.css'

class App extends Component {

    render(){
        return(
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={MainContent} />
                    <Route path='/resume' component={Resume} />
                </Switch>
            </>
        )
    }

}

export default withGlobal(App)