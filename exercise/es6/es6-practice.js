// Green Circle One

let animals = ''

function collectAnimals(...animals){
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// Green Circle Two

function combineFruit(fruit, sweets, vegetables){
    const food = [...fruit, ...sweets, ...vegetables]
    return food
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))

// Green Circle Three

const vacation = {  
location: "Burly Idaho",
duration: "2 weeks"
};

function parseSentence(){
return `We're going to have a good time in ${vacation.location} for ${vacation.duration}`
}

console.log(parseSentence())

// Green Circle Four

function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}

// Green Circle Five

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, [[secondFav], thirdFav]] = [favoriteActivities[0], [[favoriteActivities[1]], favoriteActivities[2]]]
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

returnFavorites(favoriteActivities)

console.log(returnFavorites())

// Blue Square

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]; 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

console.log(combineAnimals)

// Black Diamond One

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

//   Black Diamond Two
let array = ['']

function unshift(array, a, b, c, d, e) {  
    const shift = [...array, a, b, c, d, e]
    return shift
  }

  console.log(unshift())