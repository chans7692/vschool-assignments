import React from 'react'

function Team () {
    return(
        <div>
        <div class="flex-container">
                <div class="profile outer-container">
            <div class="inner-container">
                <img src="./image/2019-06-06-123452.jpg"
                    alt="">
                <div class="container">
                    <h2>Charles Hansen</h2>
                    <p class="position">CEO & Founder</p>
                    <p>Ipsam ad rerum repudiandae ducimus, vitae dicta at facere voluptatem fuga pariatur ex!.</p>
                    <p>silverwolf@silverforge.com</p>
                    <a href="contact.html"><button class="contact">Contact</button></a>
                </div>
            </div>
                </div>
            <div class="profile outer-container">
            <div class="inner-container">
                <img src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                    alt="">
                <div class="container">
                    <h2>Aaron Hansen</h2>
                    <p class="position">Lead Designer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>uneasysaucer@silverforge.com</p>
                    <a href="contact.html"><button class="contact">Contact</button></a>
                </div>
            </div>
        </div>
            <div class="profile outer-container">
            <div class="inner-container">
                <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="">
                <div class="container">
                    <h2>John Hansen</h2>
                    <p class="position">Lead Smith</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>dimlight@silverforge.com</p>
                    <a href="contact.html"><button class="contact">Contact</button></a>
                </div>
            </div>
        </div>
        </div>

    </div>
    )
}

export default Team;