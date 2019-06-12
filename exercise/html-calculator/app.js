let form = document.form
let a = form.a
let b = form.b
let c = form.c

let add = form.add
let subtract = form.subtract
let multiply = form.multiply
let divide = form.divide

add.addEventListener('mousedown', function () {
    c.value = parseInt(a.value) + parseInt(b.value)
    a.value = ""
    b.value = ""
})

subtract.addEventListener('mousedown', function () {
    c.value = parseInt(a.value) - parseInt(b.value)
    a.value = ""
    b.value = ""
})

multiply.addEventListener('mousedown', function () {
    c.value = parseInt(a.value) * parseInt(b.value)
    a.value = ""
    b.value = ""
})

divide.addEventListener('mousedown', function () {
    c.value = parseInt(a.value) / parseInt(b.value)
    a.value = ""
    b.value = ""
})

