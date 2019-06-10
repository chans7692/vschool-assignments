import React, { Component } from 'react';
import {withGlobal} from './GlobalProvider';
// import Playlist from './Playlist'

class VideoModel extends Component{

    componentDidMount (){
        this.props.getPlaylist()
    }

    render(){
        const mappedPlaylist = this.props.playlist.map((playlist) => {
            console.log(playlist)
            return this.props.videos.map((video) => {
                return <img src={video.snippet.thumbnails.default} alt='' />
            })
        })
        return(
            <>
                {mappedPlaylist}
            </>
        )
    }
}

export default withGlobal(VideoModel)