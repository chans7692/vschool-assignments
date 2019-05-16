var matrix = [
    [1,2,3],
    [5,6,7],
    [9,8,4]
]

for(i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix[i].length; j++){
        // console.log(matrix[i][j])
    }
}

for (i in matrix) {
    for (j in matrix[i]) {
        console.log(matrix[i][j])
        // matrix[i][j] = 0
    }
}
// console.log(matrix)

function Person(name, isAlive, hairColor){
    this.name = name;
    this.isAlive = isAlive;
    this.hairColor = hairColor;
    this.speak = () => console.log(this.name)
}

let me = new Person('Charles', true, 'blond')

// function speak(){
//     console.log(me.name)
// }
me.speak()
