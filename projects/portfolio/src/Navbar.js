import React from 'react';
import { withGlobal } from './GlobalProvider'
import { HashLink as Link } from 'react-router-hash-link';
import './stylesheets/Navbar.css'

function Navbar(props) {
    const topButton = {
        position: props.topPosition,
        bottom: props.topDisplay
    }
    const downArrow = {
        display: props.downDisplay
    }
    const upArrow = {
        display: props.upDisplay
    }
    const openNav = {
        width: props.navWidth,
        top: props.navHeight
    }
    return (
        <>
            <div id="mySidenav" className="sidenav" style={openNav}>
                <div className="open-nav" onClick={props.toggleNavLeft}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <a href="/#bgimg-1"><div onClick={props.toggleNavTop}>Top</div></a>
                <a  href="/#about"><div onClick={props.toggleNavTop}>About</div></a>
                <a href="/#flipbox"><div onClick={props.toggleNavTop}>Code</div></a>
                <a href="/#projects"><div onClick={props.toggleNavTop}>Projects</div></a>
                <Link id='show-res' to='/resume' onClick={props.toggleNavLeft}>Resume</Link>
                <i className='fas fa-angle-down' style={downArrow} onClick={props.toggleNavTop}></i>
                <i className='fas fa-angle-up' style={upArrow} onClick={props.toggleNavTop}></i>
                <ul className='social'>
                    <li>
                        <a href="https://www.linkedin.com/in/charles-hansen-4a26b5184/"><i class='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/chans7692"><i class='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="mailto: chans7692@gmail.com"><i class='far fa-envelope'></i></a>
                    </li>
                </ul>
            </div>
            <div onClick={props.topFunction} style={topButton} id="myBtn" title="Go to top">
                <p>Go To Top</p>
            </div>
        </>
    );
  }
  
  export default withGlobal(Navbar);