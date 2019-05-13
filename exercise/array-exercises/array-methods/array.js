var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function test(){
    vegetables.pop()
    fruit.shift()
    let io = fruit.indexOf("orange")
    fruit.push(io)
    let vi = vegetables.length
    vegetables.push(vi)
    const food = fruit.concat(vegetables)
    food.splice(4, 2)
    food.reverse()
    let foodie = food.join(" ")
    return foodie
}

console.log(test())