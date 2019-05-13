Part 1

function fiveAndGreaterOnly(arr) {
    return arr.filter(function(arr){
        return arr > 5
    })
  }

  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); 
/ [6, 8]

Part 2
function evensOnly(arr) {
    return arr.filter(function (arr){
        return arr % 2 === 0
    })
}

console.log(evensOnly([3, 6, 8, 2])); 
/ [6, 8, 2]

  Part 3

  function fiveCharactersOrFewerOnly(arr) {
        return arr.filter(function(arr){
            return arr.length <= 5
        })
  }

  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 
["by", "dog", "wolf", "eaten"]

Part 4

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(function(arr){
        if(arr.member === true){
            return arr.name
        }
    })
  }

  console.log(peopleWhoBelongToTheIlluminati([
      {
          name: "Angelina Jolie",
          member: true
      },
      {
          name: "Eric Jones",
          member: false
      },
      {
          name: "Paris Hilton",
          member: true
      },
      {
          name: "Kayne West",
          member: false
      },
      {
          name: "Bob Ziroll",
          member: true
      }
  ]));

Part 5

function ofAge(arr){
        return arr.filter(function(arr){
            if(arr.age >= 18){
                return arr.name
            }
        })
  }
  
  console.log(ofAge([
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