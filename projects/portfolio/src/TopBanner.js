import React from 'react';
import { withGlobal } from './GlobalProvider'
import portrait from './images/2019-06-06-123452.jpg'

function TopBanner(props) {
    return (
            <>
                <div id="bgimg-1">
                    <div className="caption">
                            <img id='portrait' src={portrait} alt=""/>  
                        <span className="border">                  
                            <div className='portrait'>
                                <div></div>
                        </div>
                            My Portfolio</span>
                    </div>
                </div>
            </>
    );
  }
  
  export default withGlobal(TopBanner);