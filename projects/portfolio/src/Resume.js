import React from 'react';
import { withGlobal } from './GlobalProvider'
import { Link } from 'react-router-dom'
import './stylesheets/Resume.css'
import resume from './images/Charles Hansen Resume 2019.pdf'
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
  