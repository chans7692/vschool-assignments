import React from 'react';
import {withGlobal} from './GlobalProvider';
import {Switch, Route, Link} from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import NotFound from './NotFound'
import ResultsList from './ResultsList'
import JobPage from './JobPage'
import './App.css'

const App = (props) => {
    return(
        <>
            <header><Link to='/'><h1><img src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='' />GIT JOBS</h1></Link></header>
            <Form />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/not-found' component={NotFound} />
                <Route exact path='/results-page' component={ResultsList} />
                <Route path='/job-page' component={JobPage} />
            </Switch>
            <footer>
                <h2>Powerd By GitHub</h2>
            </footer>
        </>
    )
}

export default withGlobal(App)