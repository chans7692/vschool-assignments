import React from 'react';
import { withGlobal } from './GlobalProvider'
import './stylesheets/projects.css'
import silverGames from "./images/silver-games.png"
import marioPestControl from "./images/mario-pest-control.png"
import silverForge from "./images/silver-forge.png"
import gitjobs from "./images/git-jobs.png"
import todo from "./images/axios-todo.png"
import recipe from "./images/recipe-book.png"

function Projects(props) {
    return (
        <>
            <div className='project-card'><img src=alt={todo} className='image' />
                <div className='overlay'>
                    <h2>Axios Todo</h2>
                    <a href=''>Code</a>
                    <div><a href="http://charles-axios-todo.sh">App</a></div>
                </div>
            </div>
            <div className='content projects' id='projects'>
                <h1>My Works</h1>
                <div className='project-card'><img src={silverGames} alt="" className='image' />
                    <div className='overlay'>
                        <h2>Silver Games</h2>
                        <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/preCourse-project'>Code</a>
                        <a href="http://silver-games.surge.sh">App</a>
                    </div>
                </div>
                <div className='project-card'><img src={marioPestControl} alt="" className='image' />
                    <div className='overlay'>
                        <h2>Mario Pest Control</h2>
                        <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/marioPestControl'>Code</a>
                    <a href="http://mario-pest-control.surge.sh">App</a>
                </div>
            </div>
            <div className='project-card'><img src={silverForge} alt="" className='image' />
                <div className='overlay'>
                    <h2>Silver Forge</h2>
                    <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/businessTime'>Code</a>
                    <a href="http://silver-forge.surge.sh">App</a>
                </div>
            </div>
            <div className='project-card'><img src={gitjobs} alt="" className='image' />
                <div className='overlay'>
                    <h2>GitJobs</h2>
                    <a href='https://github.com/chans7692/vschool-assignments/tree/master/projects/jobSearchSite'>Code</a>
                    <a href="http://gitjobs.surge.sh">App</a>
                </div>
            </div>
            <div className='project-card'><img src=alt={recipe} className='image' />
                <div className='overlay'>
                    <h2>Gluten Free Book</h2>
                    <a href=''>Code</a>
                    <div><a href="http://gluten-free-book.surge.sh">App</a></div>
                </div>
            </div>
            </div>

            <div id="bgimg-4">
                <div className="caption">
                    <span className="border">Thats All Folks!!</span>
                </div>
            </div>
        </>
    );
  }
  
  export default withGlobal(Projects);