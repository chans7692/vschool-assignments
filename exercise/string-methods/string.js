let str = "Hello World"

function capLow(){
    var cap = str.toUpperCase()
    var low = cap.toLowerCase()
    return (cap + low)
}

console.log(capLow())


function round(){
    var half = (capLow().length / 2)
    return Math.floor(half)
}

console.log(round())

function hlf1(str1) {
        return str1.slice(0, round())
}

console.log(hlf1(capLow()))

function res(str){
    var upp = str.slice(0, str.length / 2)
    var low = str.slice(str.length / 2)
    return upp.toUpperCase() + " " + low.toLowerCase()
}

console.log(res("HelloWorld"))

function title(str){
    var spl = str.split(" ")
    for(var i = 0 ; i < spl.length ; i++){
        spl[i] = spl[i].charAt(0).toUpperCase() + spl[i].substring(1);
    }
    var join = spl.join(" ")
    return join
}

console.log(title("Make a function that takes any string and capitalizes any character that follows a space."))