// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10)); // 20 (instead of 10)


// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }


// console.log(myConcat(", ", "red", "orange", "blue"));
// // "red, orange, blue, "

// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// // "elephant; giraffe; lion; cheetah; "

// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// // "sage. basil. oregano. pepper. parsley. "



// function myConcat() {
//     let result = "";
//     let separator = arguments[2];

//     for (let i = 0; i < arguments.length; i++) {
//         if (i === 2) continue;

//         result += arguments[i] + separator;
//     }

//     return result;
// }

// console.log(myConcat("red", "orange", ", "));



// const person = {
//     name: "Rahim",

//     sayHello: function () {
     
//     }
// };

// person.sayHello();


// let x = 3;

// let y = x++ + ++x + x++;
// // x = 3, 4, 5, 6
// // y = 3, 7, 13
// console.log(x, y)


const products = ["Laptop", "Mobile", "Headphone"];

let index = 0;

let firstProduct = products[index++]; 
let secondProduct = products[index++];
console.log(firstProduct, secondProduct);

let permission = 5;

console.log(permission, "Updeted");
console.log('Somethig added')
