var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function test(){
    var vp = vegetables.pop()
    var fs = fruit.shift()
    var io = fruit.indexOf("orange")
    fruit.push(io)
    var vi = vegetables.length
    vegetables.push(vi)
    const food = fruit.concat(vegetables)
    food.splice(4, 2)
    food.reverse()
    return food
}

console.log(test())