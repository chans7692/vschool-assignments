import React from 'react';
import {withGlobal} from './GlobalProvider';


const NotFound = (props) => {
    return(
        <div className='not-found'>
            <img src="https://octodex.github.com/images/privateinvestocat.jpg" alt=""/>
            <h1>Search Not Found</h1>
        </div>
    )
}

export default withGlobal(NotFound)