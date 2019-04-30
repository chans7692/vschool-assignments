let animals = ''

function collectAnimals(...animals){
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))


function combineFruit(fruit, sweets, vegetables){
    const food = [...fruit, ...sweets, ...vegetables]
    return food
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))


const vacation = {  
location: "Burly Idaho",
duration: "2 weeks"
};

function parseSentence(){
return `We're going to have a good time in ${vacation.location} for ${vacation.duration}`
}

console.log(parseSentence())