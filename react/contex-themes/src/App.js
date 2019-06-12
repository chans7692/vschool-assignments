import React from 'react';
import {withTheme} from './ThemeProvider'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './App.css';
import {Switch, Route} from 'react-router-dom'

const App = ({theme, toggleTheme}) => (
  <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
  </div>
  )

export default withTheme(App);
