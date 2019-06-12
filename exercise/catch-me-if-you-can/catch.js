// function sum(x, y){
//     if (isNaN(x) || isNaN(y)){
//         return "Not A Number"
//       } else{
//     return x + y;
//       }
//   }

//   console.log(sum(2, 3))

function sum(x, y){
    return (!isNaN(x) || !isNaN(y))
}
console.log(sum(1, 2))


try{
    sum(1, 2)
    console.log(sum(x, y))
}
catch (Exception) {
    console.log("Something went wrong.")
  }
