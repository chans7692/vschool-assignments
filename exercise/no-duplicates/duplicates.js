// let x = "bookkeeper larry"
// x = Array.from(new Set(x.split('')))
//  let y = x.join("")
// console.log(y)


// function ran(str) {
//     let pos = Math.floor(Math.random()*str.length);
//     return str.substring(0, pos)+str.substring(pos+1);
// }

// console.log(ran("some random letter"))

function shuffle(str){
    let arr = str.split("")
    Math.random(arr)
    return arr.join("")
}

console.log(shuffle("the quick brown fox jumps over the lazy dog"))