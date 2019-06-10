import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import {withGlobal} from './GlobalProvider';
import VideoModel from './VideoModel';
import './App.css'

const App = (props) => {
    return(
        <>
          <VideoModel />
        </>
    )
}

export default withGlobal(App)