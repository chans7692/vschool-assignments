

function createEvenArray(highestNum){
let even = []
let odd = []
    for(i = 2; i < highestNum; i+=2){
        even.push(i) 
    }
    for(i = 1; i < highestNum; i+=2){
        odd.push(i)
    }
    evenOdd = even.concat(odd)
    evenOdd.sort(function(a, b){return a - b})

    return evenOdd
    
}


console.log(createEvenArray(15))