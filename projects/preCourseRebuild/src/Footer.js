import React from 'react';
import { withGlobal } from './GlobalProvider';

const Footer = (theme) => {
    return (
      <div className='footer'>
        <img src="images/logo.png" alt=""></img>
      </div>
    );
  }
  
  export default withGlobal(Footer);