import React from 'react';
import {withTheme} from './ThemeProvider'

function Home({theme, toggleTheme}) {
    return (
      <div className={`${theme}-content`}>
          <h1>Home</h1>
          <button onClick={toggleTheme}>Change Theme</button>
      </div>
    );
  }
  
  export default withTheme(Home);