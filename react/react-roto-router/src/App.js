import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Services from './Services'
import './App.css';

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
