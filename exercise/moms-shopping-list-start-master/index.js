let addItem = document.getElementById('add-todo')
let title = addItem.title
let list = document.getElementById('list')


addItem.addEventListener('submit', function(event){
    event.preventDefault()
let newItem = document.createElement('li')
let lable = document.createElement('lable')
let br = document.createElement('br')
let edit = document.createElement('button')
let del = document.createElement('button')
del.setAttribute('class', 'del')


lable.innerText = title.value
edit.innerHTML = 'edit'
del.innerHTML = 'X'
newItem.appendChild(lable)
newItem.appendChild(br)
newItem.appendChild(edit)
newItem.appendChild(del)
list.appendChild(newItem)
})

del = document.getElementsByClassName('del').addEventListener('click', function(){
    this.parentNode.remove(this)
})
