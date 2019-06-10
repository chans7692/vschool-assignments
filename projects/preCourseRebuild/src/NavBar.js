import React from 'react';
import { Link } from 'react-router-dom';
import {withGlobal} from './GlobalProvider';

const Navbar = ({theme}) => {
    return (
      <div className={`${theme}-navbar`}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/games'>Games</Link>
      </div>
    );
  }
  
  export default withGlobal(Navbar);