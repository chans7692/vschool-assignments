const form = document.form

//Get From API
axios.get("https://api.vschool.io/charles/todo").then((response) => {
    displayTodos(response.data)
}).catch((error) => {
    console.log(error)
})

//Display ToDo
function displayTodos(todos) {
    todos.forEach((todo) => {
        let todoItem = document.createElement("div")
        let parentDiv = document.createElement("div")
        let titleH2 = document.createElement("h2")
        let description = document.createElement("p")
        let imgUrl = document.createElement('img')
        let btnDiv = document.createElement("div")
        let dlb = document.createElement("button")
        let edit = document.createElement("button")
        let checkBox = document.createElement("input")

        titleH2.innerText = todo.title
        description.innerText = todo.description
        dlb.innerText = "Delete"
        edit.innerText = "Edit"

        parentDiv.setAttribute("class", "todoBox")
        imgUrl.setAttribute('src', todo.imgUrl)
        btnDiv.setAttribute("class", "btn-div")
        checkBox.setAttribute("type", "checkbox")
        checkBox.setAttribute("class", "check-box")

        //Delete Entry-----------------------------------------------------
        dlb.addEventListener("click", function () {
            parentDiv.style.display = "none"
            axios.delete(`https://api.vschool.io/charles/todo/${todo._id}`)
        })

        //Check off Entry--------------------------------------------------
        checkBox.addEventListener("change", function () {
            if (checkBox.checked) {
                axios.put(`https://api.vschool.io/charles/todo/${todo._id}`, {
                    completed: true
                }).then((response) => {
                    titleH2.style.textDecoration = "line-through"
                })
            } else {
                axios.put(`https://api.vschool.io/charles/todo/${todo._id}`, {
                    completed: false
                }).then((response) => {
                    titleH2.style.textDecoration = "none"
                })
            }
        })

        //Edit Form------------------------------------------
        edit.addEventListener("click", function () {
            parentDiv.removeChild(todoItem)
            
            let editForm = document.createElement("form")
            let newTitle = document.createElement("input")
            let newDescription = document.createElement("input")
            let newImg = document.createElement('input')
            let save = document.createElement("button")
            let cancel = document.createElement("button")

            editForm.setAttribute("class", "edit-form")
            newTitle.setAttribute("value", todo.title)
            newDescription.setAttribute("value", todo.description)
            newImg.setAttribute('value', todo.imgUrl)
            save.setAttribute("type", "submit")
            cancel.setAttribute("type", "button")
            save.innerText = "Save"
            cancel.innerText = "Cancel"

            editForm.appendChild(newTitle)
            editForm.appendChild(newDescription)
            editForm.appendChild(newImg)
            editForm.appendChild(save)
            editForm.appendChild(cancel)
            parentDiv.appendChild(editForm)

            editForm.addEventListener("submit", function (event) {
                event.preventDefault()

                let newTodoTitle = newTitle.value
                let newTodoDescription = newDescription.value
                console.log(newTitle)
                console.log(newDescription)
                saveEdit = {
                    "title": newTodoTitle,
                    "description": newTodoDescription,
                }
                axios.put(`https://api.vschool.io/charles/todo/${todo._id}`, saveEdit).then((response) => {
                    document.getElementById("main").removeChild(parentDiv)        
                    displayTodos([response.data])
                })
            })

            cancel.addEventListener("click", function(){
                parentDiv.removeChild(editForm)
                parentDiv.appendChild(todoItem)
            })

        })

        //Append Elements-------------------------------------
        parentDiv.appendChild(todoItem)
        todoItem.appendChild(titleH2)
        todoItem.appendChild(description)
        todoItem.appendChild(imgUrl)
        todoItem.appendChild(btnDiv)
        btnDiv.appendChild(dlb)
        btnDiv.appendChild(edit)
        btnDiv.appendChild(checkBox)

        document.getElementById("main").appendChild(parentDiv)

    })
}

//Post To API
form.addEventListener('submit', function (event) {
    event.preventDefault()

    let title = form.title.value
    let description = form.description.value
    let imgUrl = form.imgUrl.value
    newTodo = {
        title,
        description,
        imgUrl
    }
    axios.post("https://api.vschool.io/charles/todo", newTodo).then((response) => {
        displayTodos([response.data])
    })
    form.reset()
})
