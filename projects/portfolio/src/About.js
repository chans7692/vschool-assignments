import React from 'react';
import { withGlobal } from './GlobalProvider'
import './stylesheets/About.css'

function About(props) {
    return (
            <>
                <div className='div-1' id='about'>
                    <h1>Who Am I</h1>
                    <br></br>
                    <p>I am a specialist in all things development, web development that is. I am dedicated to creating
                        the very best of websites, with a focus on function, usability, and style.
                        I have come a long way from studying HTML and CSS myself in my basement and doing one-off
                        WordPress sites on the side. When I first started out, my passion for web design was hindered
                        only by my inability to progress on my own. This drove me to seek out help from other like
                        minded programmers, so I enrolled myself into V-School, a three month coding boot-camp in
                        downtown Salt Lake City, Utah. I now the training and experience to produce websites from the
                        ground up, and am thrilled that I turn my passion into a life long career.
                    </p>
                    <br></br>
                    <p>
                        I hope you enjoy my projects as much as I enjoyed creating them.
                    </p>
                </div>

                <div id="bgimg-2">
                    <div className="caption"></div>
                </div>

            </>
    );
  }
  
  export default withGlobal(About);