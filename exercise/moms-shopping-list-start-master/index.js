let addItem = document.addItem
let listForm = document.list
let input = addItem.title
let list = document.getElementById('list')
let remove = listForm.delete


addItem.onsubmit = function(event){
    event.preventDefault()
let newItem = document.createElement('li')
newItem.innerHTML = `<lable>${input.value}</lable><br><button>edit</button><button name="delete">X</button>`
list.appendChild(newItem)
addItem.reset()
}

remove.onclick = function(event){
    event.preventDefault()
    this.remove()
}

