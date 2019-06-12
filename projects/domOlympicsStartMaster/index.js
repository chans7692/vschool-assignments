let header = document.getElementById("header")

let select = document.getElementById('theme-drop-down')
let sheet = document.createElement('style')

let clear = document.getElementById('clear-button')
let message = document.getElementsByClassName('message')
let right = document.getElementsByClassName('right')
let left = document.getElementsByClassName('left')

let send = document.getElementById('send')
let input = document.getElementById('input')
let messages = document.getElementsByClassName('messages')
let div1 = document.createElement('div')

header.innerHTML = '<h1>JavaScript Made This!!</h1><span class="name">Charles Hansen</span><span>wrote the javascript</span>'

div1.className = 'message'
messages[0].insertBefore(div1, message[0])

select.onchange = function () {
    document.body.appendChild(sheet)
    if (select.value == 'theme-two') {
        sheet.innerHTML = ".right{background: black; color: white;} .left{background: red; color: white;}";
    } else if (select.value == 'theme-one') {
        sheet.innerHTML = ".right{background: lightblue; color: black;} .left{background:burlywood; red; color: black;} "
    }
}

clear.onclick = function () {
    while (message[0]) {
        message[0].remove()
    }
}

function leftSide() {
    let sendMessage = document.createElement('div')
    sendMessage.innerHTML = `${input.value}`
    sendMessage.className = 'message left'
    messages[0].appendChild(sendMessage)
}

function rightSide() {
    let sendReply = document.createElement('div')
    sendReply.innerHTML = `${input.value}`
    sendReply.className = 'message right'
    messages[0].appendChild(sendReply)
}

send.onclick = function (event) {
    event.preventDefault()
    if (messages[0].lastElementChild.className === left[0].className) {
        return rightSide()
    } else {
        return leftSide()
    }
}