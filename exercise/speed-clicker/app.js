let count = document.getElementById("count")

add = 0

document.onclick = setTimeout(function () {
    document.onclick = null
}, 30000)

document.onclick = function () {
    add += 1
    localStorage.setItem("add", add)
let total = localStorage.getItem("add")
count.innerHTML = total
};
let total = localStorage.getItem("add")
count.innerHTML = total