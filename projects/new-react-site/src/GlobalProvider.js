import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext()

class GlobalProvider extends Component{
    constructor(){
        super()

        this.state = {
            channel:
                {name: 'Grain',
                id:'UCR9Gcq0CMm6YgTzsDxAxjOQ'},
            playlist: [],
            videos: []
        }
    }

    getPlaylist = () => {
      axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCR9Gcq0CMm6YgTzsDxAxjOQ&key=AIzaSyAIswIWgn72960ThqttXDyUb7j46ds3Tn8`).then((response) => {
        this.setState({
          playlist: response.data.items
        })
      this.getVideos()
  
      })
    }

    getVideos = (playlistId) => {
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyAIswIWgn72960ThqttXDyUb7j46ds3Tn8`).then((response) => {
      this.setState({
        videos: response.data.items
      })
    })
  }


    render(){

      // console.log(this.props.channel.name)
      // console.log(this.state.playlist)
      console.log(this.state.videos)

        const value = {
          getPlaylist: this.getPlaylist,
          getVideos:this.getVideos,
            ...this.state
        }
        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export default GlobalProvider;

export const withGlobal = C => props => (
<Consumer>
{value => <C {...value}{...props}/>}
</Consumer>
)