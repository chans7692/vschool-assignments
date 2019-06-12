import React, { Component } from 'react';
import {withGlobal} from './GlobalProvider';

class Videos extends Component {

    componentDidMount (){
        this.props.getVideos()
    }
    
    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default withGlobal(Videos);