import React from 'react';
import { withGlobal } from './GlobalProvider'
import './stylesheets/projects.css'
import silverGames from "./images/silver-games.png"
import marioPestControl from "./images/mario-pest-control.png"
import silverForge from "./images/silver-forge.png"
import gitjobs from "./images/git-jobs.png"
import todo from "./images/axios-todo.png"
// import recipe from "./images/recipe-book.png"
import reactTodo from './images/react-todo.png'

function Projects(props) {
    return (
        <>
            <div className='content projects' id='projects'>
                <h1>My Projects</h1>
                <div className='project-card'><img src={todo} alt="" className='image' />
                    <div className='overlay'>
                        <h2>Axios Todo</h2>
                        <p>A simple Axios Todo App using HTML, CSS, and JavaScript.</p>
                        <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/axiosTodo' target="_blank">Code</a>
                        <a href="http://charles-axios-todo.surge.sh" target="_blank" target="_blank">App</a>
                    </div>
                </div>
                <div className='project-card'><img src={reactTodo} alt='' className='image' />
                    <div className='overlay'>
                        <h2>React Todo</h2>
                        <p>A more complex Axios Todo using React.js and MongoDB with user authentication.</p>
                        <a href='https://github.com/chans7692/react-todo' target="_blank">Code</a>
                        <a href="https://charles-react-todo.herokuapp.com" target="_blank">App</a>
                    </div>
                </div>
                <div className='project-card'><img src={silverGames} alt="" className='image' />
                    <div className='overlay'>
                        <h2>Silver Games</h2>
                        <p>My first made from scratch website befor I started at VSchool.</p>
                        <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/preCourse-project' target="_blank">Code</a>
                        <a href="http://silver-games.surge.sh" target="_blank">App</a>
                    </div>
                </div>
                <div className='project-card'><img src={marioPestControl} alt="" className='image' />
                    <div className='overlay'>
                        <h2>Mario Pest Control</h2>
                        <p>A small themed calculator to practice DOM.</p>
                        <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/marioPestControl' target="_blank">Code</a>
                        <a href="http://mario-pest-control.surge.sh" target="_blank">App</a>
                </div>
            </div>
            <div className='project-card'><img src={silverForge} alt="" className='image' />
                <div className='overlay'>
                    <h2>Silver Forge</h2>
                    <p>A template for a static site to promote me and my brothers' forge.</p>
                    <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/businessTime' target="_blank">Code</a>
                    <a href="http://silver-forge.surge.sh" target="_blank">App</a>
                </div>
            </div>
            <div className='project-card'><img src={gitjobs} alt="" className='image' />
                <div className='overlay'>
                    <h2>GitJobs</h2>
                    <p>A job search site using an external api.</p>
                    <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/jobSearchSite' target="_blank">Code</a>
                    <a href="http://gitjobs.surge.sh" target="_blank">App</a>
                </div>
            </div>
            {/* <div className='project-card'><img src={recipe} alt='' className='image' />
                <div className='overlay'>
                    <h2>Gluten Free Book</h2>
                    <p>A personal recipe book intrnde</p>
                    <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/portfolio' target="_blank">Code</a>
                    <a href="http://gluten-free-book.surge.sh" target="_blank">App</a>
                </div>
            </div> */}
            </div>
                    <div id="bgimg-3">
                        <div className="caption">
                        </div>
                    </div>
        </>
    );
  }
  
  export default withGlobal(Projects);