import React from 'react'
import { withGlobal } from './GlobalProvider'
import TopBanner from './TopBanner'
import About from './About'
import Code from './FlipBox'
import Projects from './Projects'
import Logo from './images/logo.png'

function MainContent(props) { 
    const mainWidth = {
        width: props.mainWidth
    }
    return (
            <>
                <div className='main' onClick={props.closeNav} style={mainWidth}>
                    <TopBanner />
                    <Code />
                    <Projects />
                    <About />
                <footer>
                    <img src={Logo} alt=""/>
                </footer>
                </div>
            </>
    );
  }
  
  export default withGlobal(MainContent);