import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext()

class GlobalProvider extends Component{
  constructor(){
    super()
    this.state = {
        theme: "dark",
        youtubers: [
            {name:'Grian',
            id:'UCR9Gcq0CMm6YgTzsDxAxjOQ'},
            {name:'Mumbo Jumbo',
            id:'UChFur_NwVSbUozOcF_F2kMg'},
            {name:'andyisyoda',
            id:'UCmDsKO8gTXVRHcHeF1E_5Jg'}
        ],
        youtuber: [],
        playlists: [],
        videos: []
    }
  }


  setYoutuber = (youtuberID) => {
    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${youtuberID}&key=AIzaSyAIswIWgn72960ThqttXDyUb7j46ds3Tn8`).then((response) => {
      this.setState({
        youtuber: response.data.items
      })

    })
  }

  getPlaylist = (channelID) => {
    axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelID}&key=AIzaSyAIswIWgn72960ThqttXDyUb7j46ds3Tn8`).then((response) => {
      this.setState({
        playlist: response.data.items
      })

    })
  }

  getVideos = (playlistID) => {
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&key=AIzaSyAIswIWgn72960ThqttXDyUb7j46ds3Tn8`).then((response) => {
      this.setState({
        videos: response.data.items
      })
    })
  }


  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }

render() {  
  const props = {
    setYoutuber: this.setYoutuber,
    getPlaylist: this.getPlaylist,
    getVideos: this.getVideos,
    toggleTheme: this.toggleTheme,
    ...this.state
  }
  return (
      <Provider value={props} >
          {this.props.children}
      </Provider>
  );
}
}

export default GlobalProvider;

export const withGlobal = C => props => (
<Consumer>
{value => <C {...value}{...props}/>}
</Consumer>
)