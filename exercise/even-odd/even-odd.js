// var number = 0
// var even = " even";
// var odd = " odd";
// //if/else

// function counter(val) {
//     if (val % 2 == 0) {
//         return val + even;
//     } else {
//         return val + odd;
//     }
// }
// var timer = setInterval(function () {
//     console.log(counter(++number))
// }, 1000);

// setTimeout(function () {
//     clearInterval(timer);
// }, 101000);

// //for loop

// for (i = 0; i <= 101; i++) {
//     if (i % 2) {
//         console.log(i + " odd")
//     } else {
//         console.log(i + " even ")
//     }
// }

// //while loop

let i = 0

while (i <= 100) {
    if (i % 2 == 0) {
        console.log(++i + " odd");
    } else {
        console.log(++i + " even ");
    }
}