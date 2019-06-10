import React from 'react';
import {withTheme} from './ThemeProvider'

function GameCards({theme}) {
    return (
      <div className={`${theme}-content`}>
      </div>
    );
  }
  
  export default withTheme(GameCards);