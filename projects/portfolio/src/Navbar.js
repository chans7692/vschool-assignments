import React from 'react';
import { withGlobal } from './GlobalProvider'
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(props) {
    const topButton = {
        position: props.topPosition,
        bottom: props.topDisplay
    }
    const navWidth = {
        width: props.navWidth
    }
    return (
        <>
            <div id="mySidenav" className="sidenav" style={navWidth}>
                <div className="open-nav" onClick={props.openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <a href="/#bgimg-1" onClick={props.closeResume}>Top</a>
                <a  href="/#about" onClick={props.closeResume}>About</a>
                <a href="/#code" onClick={props.closeResume}>Code</a>
                <a href="/#projects" onClick={props.closeResume}>Projects</a>
                <Link to='/resume' onClick={props.openNav}>Resume</Link>
            </div>
            <div onClick={props.topFunction} style={topButton} id="myBtn" title="Go to top">
                <p>Go To Top</p>
            </div>
        </>
    );
  }
  
  export default withGlobal(Navbar);