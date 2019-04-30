let form = document.getElementById('calculator')

let one = form.one.value
let two = form.two.value
let three = form.three.value
let plus = form.plus.value
let four = form.four.value
let five = form.five.value
let six = form.six.value
let minus = form.minus.value
let seven = form.seven.value
let eight = form.eight.value
let nine = form.nine.value
let multiply = form.multiply.value
let zero = form.zero.value
let decimal = form.decimal.value
let divide = form.divide.value
let equal = form.equal.value

let calc = {one, two, three, plus, four, five, six, minus, seven, eight, nine, multiply, zero, decimal, divide, equal}



for(i = 0; i < calc.length; i++){
	let calca = calc[i]
	.addEventListener('click', function(){
        alert('Hello World')
    })


function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
	document.getElementById('inputwindow').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}