// function sum(one, two){
//     return(one + two)
// }

// console.log(sum(3, 5))

// function max(three, four, five){
//     return Math.max(three, four, five)
// }

// console.log(max(5, 32, 13))

// function evenOdd(six){
//     if(six % 2 == 0){
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(evenOdd(6))




function arr(str) {
    var strLength = str.length
    var strCon = str.length += str.length
    if (strLength < 20) {
        if (strLength < strCon) {
            if (str.length % 2 == 0) {
                return str.slice(0, str.length / 2);
            }
        }
    }
}

console.log(arr("javascript is cool"))