import React, { Component } from 'react';
import {withGlobal} from './GlobalProvider';

class Playlist extends Component{

    componentDidMount (){
        this.props.getPlaylist()
    }

    render(){
        const mappedVideos = this.props.videos.map((video) => {
            return(
            <img src={video.snippet.thumbnails.default.url} alt=''/>)
        })
        return(
            <>
                {mappedVideos}
            </>
        )
    }
}

export default withGlobal(Playlist)