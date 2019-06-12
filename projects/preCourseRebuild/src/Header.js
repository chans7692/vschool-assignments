import React from 'react';
import {withGlobal} from './GlobalProvider';

const Header = ({theme, toggleTheme}) => {
    return (
      <div className={`${theme}-header`}>
          <a href="home.html"><img id="logo" src="../images/SilverGames.png" alt="" /></a>
          <button onClick={toggleTheme}>Change Theme</button>
      </div>
    );
  }
  
  export default withGlobal(Header);