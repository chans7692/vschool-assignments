import React from 'react';
import {withGlobal} from './GlobalProvider';

const Home = ({theme, toggleTheme}) => {
    return (
      <div className={`${theme}-content`}> 
          
      </div>
    );
  }
  
  export default withGlobal(Home);