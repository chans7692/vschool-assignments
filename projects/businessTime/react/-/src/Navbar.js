import React from 'react'

function navBar (){
    return(
    <div>
        <ul class="flex-container">
            <li class="nav">
                <a href="index.html"><img src="image/home.png" alt=""></a>
            </li>
            <li class="nav">
                <a href="the-team.html"><img src="image/the-team.png" alt=""></a>
            </li>
            <li class="nav">
                <a href="works.html"><img src="image/works.png" alt=""></a>
            </li>
            <li class="nav">
                <a href="contact.html"><img src="image/contact.png" alt=""></a>
            </li>
        </ul>
    </div>
    );
}

export default navBar;