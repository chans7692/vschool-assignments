import React from 'react';
import { withGlobal } from './GlobalProvider'

function Projects(props) {
    return (
        <>
            <div className='content' id='projects'>
                <div>
                    <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
            </div>

            <div id="bgimg-4">
                <div className="caption">
                    <span className="border">COOL!</span>
                </div>
            </div>
        </>
    );
  }
  
  export default withGlobal(Projects);