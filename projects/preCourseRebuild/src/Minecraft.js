import React from 'react';
import {withGlobal} from './GlobalProvider';
import YoutuberCards from './YoutuberCards'

const Minecraft = ({theme, youtubers}) => {
    console.log(youtubers)
    const mappedYoutubers = youtubers.map((tuber) => {
        console.log(tuber)
        return <YoutuberCards cards={tuber} />
    })
    return (
      <div className={`${theme}-content`}>
          {mappedYoutubers}
      </div>
    );
  }
  
  export default withGlobal(Minecraft);