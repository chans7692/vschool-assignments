// Part 1

// function total(arr) {
//     return arr.reduce(function(a , b){
//             return a + b
//     })
//  }
 
//  console.log(total([1,2,3])); // 6

//  Part 2

// function stringConcat(arr) {
//     return arr.reduce(function(a, b){
//         let c = a.toString()
//         let d = b.toString()
//         return c + d
//     })
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"

//  Part 3

// function totalVotes(arr) {
//     let count = arr.filter(function(arr){
//         return arr.voted === true
//     })
//      return count.length
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

// Part 4

// function shoppingSpree(arr) {
//         let val = arr.map(arr => arr.price)
//         return val.reduce(function(a, b){return a + b})
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005

//  Part 5

// function flatten(arr) {
//     return arr = [...arr[0], ...arr[1], ...arr[2]]
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//  Part 6
var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];

function voterResults(arr) {
    // YoungVotes

    let youngVotes = arr.filter(function (arr) {
        if (arr.age >= 18 && arr.age <= 25) {
            return arr.voted === true
        }
    })

    // Youth

    let youth = arr.filter(function (arr) {
        if (arr.age >= 18 && arr.age <= 25) {
            return arr.age >= 18 && arr.age <= 25
        }
    })


    // MidVotes

    let midVotes = arr.filter(function (arr) {
        if (arr.age >= 26 && arr.age <= 35) {
            return arr.voted === true
        }
    })


    // Mid

    let mid = arr.filter(function (arr) {
        if (arr.age >= 26 && arr.age <= 35) {
            return arr.age >= 26 && arr.age <= 55
        }
    })


    // OldVotes

    let oldVotes = arr.filter(function (arr) {
        if (arr.age >= 36 && arr.age <= 55) {
            return arr.voted === true
        }
    })

    // Old

    let old = arr.filter(function (arr) {
        if (arr.age >= 36 && arr.age <= 55) {
            return arr.age >= 36 && arr.age <= 55
        }
    })
    return [`youngVotes: ${youngVotes.length} young: ${youth.length} midVotes: ${midVotes.length} mid: ${mid.length} oldVotes: ${oldVotes.length} old: ${old.length}`]
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/