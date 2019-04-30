var calc = document.calc
var goombas = calc.goombas
var bobOmb = calc.bobOmb
var cheepCheep = calc.cheepCheep

var results = calc.results

let goombasPrice = 1
let bobOmbPrice = 1
let cheepCheepPrice = 1

calc.addEventListener('input', function(){
    goombasPrice = parseInt(goombas.value)*parseInt('5')
    bobOmbPrice = parseInt(bobOmb.value)*parseInt('7') 
    cheepCheepPrice = parseInt(cheepCheep.value)*parseInt('11')
    results.value = goombasPrice + bobOmbPrice + cheepCheepPrice   
})

console.log(goombasPrice)
console.log(bobOmbPrice)
console.log(cheepCheepPrice)