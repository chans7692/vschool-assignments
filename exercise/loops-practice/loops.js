var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0

for (i = 0; i < officeItems.length; i++) {
  if (officeItems[i] = "computer") {
    count++
  }

}
console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [{
  name: "Mike",
  age: 12,
  gender: "male"
}, {
  name: "Madeline",
  age: 80,
  gender: "female"
}, {
  name: "Cheryl",
  age: 22,
  gender: "female"
}, {
  name: "Sam",
  age: 30,
  gender: "male"
}, {
  name: "Suzy",
  age: 4,
  gender: "female"
}]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. HE'S good to see Mad Max Fury Road.")
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. SHE'S good to see Mad Max Fury Road.")
    }


  } else {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HIM in.")
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HER in.")
    }
  }
}


var buttonClick = [3, 2, 5]
var sum = buttonClick.reduce(add)

function add(accumulator, a) {
  return accumulator + a;
}

if (sum % 2) {
  console.log("Light Off")
} else {
  console.log("light On")
}