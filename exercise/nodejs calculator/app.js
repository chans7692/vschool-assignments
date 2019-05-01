const readlineSync = require('readline-sync')

const num1 = readlineSync.questionInt("Please enter your first number ")
const num2 = readlineSync.questionInt("Please enter your second number ")
operators = ["add", "sub", "mul", "div"]
i = readlineSync.keyInSelect(operators, "What do you whant to do?")

if(operators[i] === operators[0]){
    console.log (num1 + num2)
} else if(operators[i] === operators[1]){
    console.log (num1 - num2)
} else if(operators[i] === operators[2]){
    console.log (num1 * num2)
} else if(operators[i] === operators[3]){
    console.log (num1 / num2)
}

