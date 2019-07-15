import React, { Component } from 'react'

class Contact extends Component{
    constuctor(){
        super()

        this.state{
            
        }
    }

    render(){
        return(
        <div class="contact-container outer-container">
            <form action="" name="contactForm" class="inner-container">
                <h3>First Name</h3>
                <input type="text" name="first-name" id="" placeholder="" required>
                <h3>Last Name</h3>
                <input type="text" name="last-name" id="" required>
                <h3>Email</h3>
                <input type="email" name="email" id="" required>
                <h3>Comments</h3>
                <textarea name="comments" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="submit">
            </form>
        </div>
        )
    }
}

export default Contact