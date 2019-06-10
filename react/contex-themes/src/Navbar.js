import React from 'react';
import { Link } from 'react-router-dom'
import {withTheme} from './ThemeProvider'

function Navbar({theme, toggleTheme}) {
    return (
      <div className={`${theme}-navbar`}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
      </div>
    );
  }
  
  export default withTheme(Navbar);