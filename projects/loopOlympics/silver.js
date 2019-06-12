var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for(i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

var name = [];
var occupation = [];

for(i = 0; i < peopleArray.length; i+=2){
    name.push(peopleArray[i].name)
}

for(i = 1; i < peopleArray.length; i+=2){
    occupation.push(peopleArray[i].occupation)
}

console.log(name, occupation)