import React from 'react';
import { Link } from 'react-router-dom';
import {withGlobal} from './GlobalProvider'

const YoutuberCards = ({theme, setYoutuber, cards}) => {
  let{name, id} = cards

    return (
      <Link to='./youtuberpage' onClick={setYoutuber(id)}>
      <div className={`${theme}-content`}>
        <h1>{name}</h1>
        <h2>{id}</h2>
      </div>
      </Link>
    );
  }
  
  export default withGlobal(YoutuberCards);