import React from 'react';
import { withGlobal } from './GlobalProvider'

function Resume(props) { 
    return (
            <>
            <div className='content'>
                    <div id='code'>
                        <div className="flip-box-inner">
                            <div className="flip-box-front" id='html5'></div>
                            <div className="flip-box-back" id='html5b'>
                                <h2>HTML5</h2>
                            </div>
                        </div>
                        <div className="flip-box-inner">
                            <div className="flip-box-front" id='css3'>
                            </div>
                            <div className="flip-box-back" id='css3b'>
                                <h2>CSS2</h2>
                            </div>
                        </div>
                        <div className="flip-box-inner">
                            <div className="flip-box-front" id='javascript'>
                            </div>
                            <div className="flip-box-back" id='javascriptb'>
                                <h2>JavaScript</h2>
                            </div>
                        </div>
                        <div className="flip-box-inner">
                            <div className="flip-box-front" id='react'>
                            </div>
                            <div className="flip-box-back" id='reactb'>
                                <h2>React.js</h2>
                            </div>
                        </div>
                        <div className="flip-box-inner">
                            <div className="flip-box-front" id='node'>
                            </div>
                            <div className="flip-box-back" id='nodeb'>
                                <h2>Node.js</h2>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="bgimg-3">
                    <div className="caption">
                    </div>
                </div>
            </>
    );
  }
  
  export default withGlobal(Resume);