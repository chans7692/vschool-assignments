if (typeof "dog" === 'string' || "dog"
    instanceof String) {
    console.log("is a string")
} else {
    console.log("is not a string")
}

if (typeof "true" === 'boolean' || "true"
    instanceof Boolean) {
    console.log("is a boolean")
} else {
    console.log("is not a boolean")
}

var anyThing = 10

if (anyThing !== 'undefined') {
    console.log("defined")
} else {
    console.log("undefined")
}

var letter = 's'
var num = 12

if (letter.length < num) {
    console.log("true")
} else {
    console.log("false")
}

var myNum = 10

var evenOdd = (myNum % 2) ? "odd" : "even"
console.log(evenOdd)