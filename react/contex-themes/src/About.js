import React from 'react';
import {withTheme} from './ThemeProvider'

function About({theme, toggleTheme}) {
    return (
      <div className={`${theme}-content`}>
          <h1>About</h1>
          <button onClick={toggleTheme}>Change Theme</button>
      </div>
    );
  }
  
  export default withTheme(About);