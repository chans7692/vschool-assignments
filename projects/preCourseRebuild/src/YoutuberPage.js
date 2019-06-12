import React from 'react';
import {withGlobal} from './GlobalProvider';
import Playlist from './Playlist'

const YoutuberPage = ({theme, youtuber, playlists, getPlaylist}) => {

  getPlaylist(youtuber.items.id)

  const mappedPlaylist = playlists.map((list) => {
    return <Playlist lists = {list} />
  })
    return (
      <div className={`${theme}-content`}>
        <img src={youtuber.items.image.bannerImageUrl} alt=""/>
        {mappedPlaylist}
      </div>
    );
  }
  
  export default withGlobal(YoutuberPage);