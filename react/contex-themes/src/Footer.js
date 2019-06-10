import React from 'react';
import {withTheme} from './ThemeProvider'

function Footer({theme, toggleTheme}) {
    return (
      <div className={`${theme}-footer`}>
          <h1>Footer</h1>
      </div>
    );
  }
  
  export default withTheme(Footer);