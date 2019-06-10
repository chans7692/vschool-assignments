import React from 'react';
import {withGlobal} from './GlobalProvider';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Games from './Games';
import YoutuberList from './YoutuberList';
import YoutuberPage from './YoutuberPage';
import Minecraft from './Minecraft'
import './App.css';

import {Switch, Route} from 'react-router-dom';

const App = ({theme}) => (
  <div className='App'>
    <Header />
    <NavBar />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/games' component={Games} />
        <Route path='/youtuberList' component={YoutuberList} />
        <Route path='/youtuberpage' component={YoutuberPage} />
        <Route path='/minecraft' component={Minecraft} />
        {/* <Route path='/' component={} /> */}
    </Switch>
    <Footer />
  </div>
  )

export default withGlobal(App);
