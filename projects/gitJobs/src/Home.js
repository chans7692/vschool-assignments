import React from 'react';
import {withGlobal} from './GlobalProvider';


const Home = (props) => {
    
    return(
        <div className='octo-cat'>
            <img id='octo-cat' src={props.cat} alt=""/>
        </div>
    )
}

export default withGlobal(Home)