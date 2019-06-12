let str = 5

// function rev(){
//    let split =  str.split('')
//    let flip = split.reverse()
//    return str = flip.join('')
// }

// console.log(rev())

// function isNum(){
//     if(isNaN(str)){
//         return 'false'
//     } else {
//         return 'true'
//     }
// }

// console.log(isNum())

// function isEven() {
//     if (str % 2) {
//         return 'odd'
//     } else {
//         return 'even'
//     }
// }

// console.log(isEven())

// const arr = [3, 2, 4]

// function getSum(total, num) {
//         return total + num;
//       }

// function averageArray(){
//     return arr.reduce(getSum) / arr.length
// }

// console.log(averageArray())


let arr1 = [1,8,9,12];
let arr2 = [2,3,10,11,13];

let index1 = function(){
    for(i = 0; i < arr1.length; i++){
        return arr1[i]
    }
}

let index2 = function(){
    for(i = 0; i < arr2.length; i++){
        return arr2[i]
    }
}

let arr3 = index1.concat(index2)

console.log(arr3)