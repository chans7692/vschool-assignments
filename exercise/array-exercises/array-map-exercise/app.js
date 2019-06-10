// Part 1

// function doubleNumbers(arr){
//     return arr.map(function(value){
//         return value * 2
//     })
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Part 2

//   function stringItUp(arr){
//       return arr.map(function(arr) {
//           return arr.toString()
          
//       });
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// Part 3

//   function capitalizeNames(arr){
//         return arr.map(function(arr){
//         let newArr = arr.toLowerCase()
//         return newArr[0].charAt(0).toUpperCase() + newArr.substr(1)
//     })
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// Part 4

// function namesOnly(arr){
//     return arr.map(function(arr){
//         return arr.name
//     })
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// Part 5

// function makeStrings(arr){
//     return arr.map(function(arr){
//         if(arr.age >= 18){
//             return `${arr.name} can go to The Matix`
//         } else {
//             return `${arr.name} is under age!!`
//         }
//     })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]


//   Part 6

function readyToPutInTheDOM(arr){
    return arr.map(function(arr){
        return `<h1>${arr.name}</h1><h2>${arr.age}</h2>`
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]