let contact = document.contactForm
let first = contact.first-name
let last = contact.last-name
let email = contact.email

contact.onsubmit = function(event){
    event.preventDefault()
    alert('Your message is on its way')
    contact.reset()
}