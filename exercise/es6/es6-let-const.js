// //Task 1
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = (arr) => {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// //Task 2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = (arr) => {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

// // Task 3
// const doMathSum = (a, b) => {
//     return a + b
// }

// let produceProduct = (a, b) => {
//     return a * b
// }

// // Task 4
// const person = {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     age: '100'
// }

// const printString = () => {
//     return `Hi ${person.firstName} ${person.lastName}, how does it feel to be ${person.age}`
// }

// Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];


 
const filterForDogs = (arr) => {
     return arr.filter(animal => animal.type == 'dog' ? true : false)
 }
 console.log(filterForDogs(animals))