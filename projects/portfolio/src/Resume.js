import React from 'react';
import { withGlobal } from './GlobalProvider'
import { Link } from 'react-router-dom'
import resume from './images/Resume.pdf'
import Clear from '@material-ui/icons/Clear'

function Resume() {
    return (
        <>
            <div className='resume-page'>
                <div className='resume'>
                    <Link id='close-resume' to='/'><Clear /></Link>
                    <object width="900" height="1172" data={resume}>Resume</object>
                </div>
            </div>
        </>
    );
  }
  
  export default withGlobal(Resume);
  