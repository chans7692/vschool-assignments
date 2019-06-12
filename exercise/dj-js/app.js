let color = document.getElementById('color')

color.addEventListener('mouseover', function () {
    color.style.backgroundColor = 'blue'
})
color.addEventListener('mousedown', function () {
    color.style.backgroundColor = 'red'
})
color.addEventListener('mouseup', function () {
    color.style.backgroundColor = 'yellow'
})
color.addEventListener('dblclick', function () {
    color.style.backgroundColor = 'green'
})

document.addEventListener('wheel', function () {
    color.style.backgroundColor = 'orange'
})



document.addEventListener('keydown', function (event) {
    if (event.which === 66) {
        color.style.backgroundColor = 'blue'
    } else if (event.which === 82) {
        color.style.backgroundColor = 'red'
    } else if (event.which === 89) {
        color.style.backgroundColor = 'yellow'
    } else if (event.which === 71) {
        color.style.backgroundColor = 'green'
    } else if (event.which === 79) {
        color.style.backgroundColor = 'orange'
    }
})