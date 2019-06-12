import React from 'react';
import {withTheme} from './ThemeProvider'

function Contact({theme, toggleTheme}) {
    return (
      <div className={`${theme}-content`}>
        <h1>Contact</h1>
          <button onClick={toggleTheme}>Change Theme</button>
      </div>
    );
  }
  
  export default withTheme(Contact);