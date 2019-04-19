// Preliminaries

if (5 > 3) {
    console.log("is greater than")
}

if ("cat".length === 3) {
    console.log("is the length")
}

if ("cat" === "dog") {
    console.log("is same")
} else {
    console.log("not the same")
}


// Bronze Medal

var person = {
    name: "Bobby",
    age: 12
  }

  if(person.name[0] === "B" && person.age >= 18){
      console.log(person.name + " is allowed to go to the movie")
  }
  

//   Silver Medal

  if(1 === 1){
      console.log("strict")
  } else if(1 == 1){
      console.log("loose")
  } else{
      console.log("not equal at all")
  }

  if(1 <= 2 && 2 === 4){
      console.log("yes")
  }


//   Gold Medal

  if (typeof "dog" === 'string' || "dog" instanceof String){
      console.log("is a string")
  }
else{
    console.log("is not a string")
}

if (typeof "true" === 'boolean' || "true" instanceof Boolean){
    console.log("is a boolean")
}
else{
  console.log("is not a boolean")
}

var anyThing = 10

if (anyThing !== 'undefined') {
    console.log("defined")
} else {
    console.log("undefined")
}

var letter = "s"

if (letter > 12){
    console.log("true")
} else {
    console.log("false")
}

var myNum = 10

var evenOdd = (myNum % 2) ? "odd":"even"
 console.log(evenOdd)