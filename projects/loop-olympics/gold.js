var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push([])
    for (j = 0; j < 3; j++) {
        arr[i].push(0)
    }
}


var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push([])
    for (j = 0; j < 3; j++) {
        arr[i].push(i)
    }
}

var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push([])
    for (j = 0; j < 3; j++) {
        arr[i].push(j)
    }
}

var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push([])
    for (j = 0; j < 3; j++) {
        arr[i].push("x")
    }
}

console.log(arr)