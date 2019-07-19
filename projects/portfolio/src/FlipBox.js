import React, { Component } from 'react';
import { withGlobal } from './GlobalProvider'
import './stylesheets/FlipBox.css'

class Resume extends Component{

    render(){
        return (
                <>
                <div className='content' id='flipbox'>
                        <h1>How I Code</h1>
                        <div className='code'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front" id='html5'></div>
                                <div className="flip-box-back" id='html5b'>
                                    <p>Like most programmers, I started with HTML. HTML is often referred to as the skeleton
                                        of the website and I can't think of a
                                        better way to describe it. I work to structure all my HTML to provide a clear
                                        understanding of the purpose of each line of code.</p>
                                </div>
                            </div>
                            <div className="flip-box-inner">
                                <div className="flip-box-front" id='css3'>
                                </div>
                                <div className="flip-box-back" id='css3b'>
                                    <p>CSS is the skin that brings style to HTML. It
                                        provides the color and dimension that attract the users' attention and draws them
                                        in. That is my goal in all my front end work. Without CSS, the internet would be a
                                        boring place.</p>
                                </div>
                            </div>
                            <div className="flip-box-inner">
                                <div className="flip-box-front" id='javascript'>
                                </div>
                                <div className="flip-box-back" id='javascriptb'>
                                    <p>If HTML is the skeleton and CSS is the skin then JavaScript is the *nervous*
                                        system. JavaScript is what animates the website and brings it to life. while not
                                        all websites need JavaScript it is still an important part of the programming
                                        world. I know that if there is ever something that I can't figure out in other
                                        languages, I can always fall back on JavaScript.</p>
                                </div>
                            </div>
                            <div className="flip-box-inner">
                                <div className="flip-box-front" id='react'>
                                </div>
                                <div className="flip-box-back" id='reactb'>
                                    <p>As great as HTML, CSS, and JavaScript are, I must admit that React is
                                        my favorite. With react I am able to split up and reuse components throughout all my
                                        projects. This allows me to eliminate repeated code and clean up what would
                                        otherwise be very long and often confusing scripts.</p>
                                </div>
                            </div>
                            <div className="flip-box-inner">
                                <div className="flip-box-front" id='node'>
                                </div>
                                <div className="flip-box-back" id='nodeb'>
                                    <p>How much time was wasted reinventing the wheel trying to reach the same goal that
                                        someone else *had* already *met*? With *Node*, I can load and run server-side
                                        applications that work out all the logic for me.</p>
                                    <p>Ok, that may be a little bit of an exaggeration but I think you get my point.
                                        Just being able to dynamically generate a web application before it is ever sent
                                        to the user is a big plus in my book</p>
                                </div>
                            </div>
                        </div>

                    </div>
                <div id="bgimg-2">
                    <div className="caption"></div>
                </div>
                </>
        );
    }
  }
  
  export default withGlobal(Resume);