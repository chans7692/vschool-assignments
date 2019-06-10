import React from 'react'
import { withGlobal } from './GlobalProvider'
import TopBanner from './TopBanner'
import About from './About'
import Code from './Code'
import Projects from './Projects'

function MainContent(props) { 
    const mainWidth = {
        width: props.mainWidth
    }
    return (
            <>
                <div className='main' onClick={props.closeNav} style={mainWidth}>
                    <TopBanner />
                    <About />
                    <Code />
                    <Projects />
                </div>
            </>
    );
  }
  
  export default withGlobal(MainContent);