`<form class='edit' name="editForm">
            <input type='text' name='title' value='${todo.title}'></input>
            <input type='text' name='description' value='${todo.description}'></input>
            <button type="submit" name="submit">Save</button><button name="cancel" id='cancel'>Cancel</button>
            </form>`


            let editForn = document.createElement("form")
            let newTitle = document.createElement("input")
            let newDescription = document.createElement("input")
            let save = document.createElement("button")
            let cancel = document.createElement("button")

            newTitle.setAttribute("value", todo.title)
            newDescription,setAttribute("value", todo.description)
            save.setAttribute("type", "submit")