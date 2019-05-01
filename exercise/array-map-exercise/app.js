// function doubleNumbers(arr){
//     return arr.map(function(value){
//         return value * 2
//     })
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//   function stringItUp(arr){
//       return arr.forEach(function() {
//           return arr.toString()
          
//       });
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//   function capitalizeNames(arr){
//     return arr.forEach(function(el){
//         return el[0].toUpperCase()
//     })
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

 var str = "Hello my name is Albert"
 let res = str.split(' ');
 res.splice(4, 1, "Charles");
 str = res.join();

 console.log(str)
