import React from 'react';
import {withGlobal} from './GlobalProvider';
import { Link } from 'react-router-dom';

const Games = ({theme}) => {
    return (
      <div className={`${theme}-content`}> 
        <Link to='/minecraft'>Minecraft</Link>
      </div>
    );
  }
  
  export default withGlobal(Games);