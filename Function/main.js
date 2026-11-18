// function square(num) {
//     console.log(num * num)
// }
// square(23)



// const myCar = {
//     make: "Honda",
//     model: "Accord"
// }

// console.log(myCar.make)

// function myFunc(theObj) {
//     theObj.make = "Toyota";
//     console.log(theObj.make)
// }


// myFunc(myCar)




// function myFunc(theArr) {
//   theArr[0] = 30;
// }

// const arr = [45];

// console.log(arr[0]); 
// myFunc(arr);
// console.log(arr[0]); 






// const name = "Mijanur";

// function outerFunction() {

//     const age = 25;

//     function innerFunction() {

//         const country = "Bangladesh";

//         console.log(name);
//         console.log(age);
//         console.log(country);
//     }

//     innerFunction();
// }

// outerFunction();








// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// // console.log(factorial(4)); // 24

// const fac1 = (n)=> {
//  return n < 2? 1 : n * (n-1)
// }

// console.log(fac1(1))


// const fac2 = (n) => {
//   return n < 2 ? 1 : n * (n -1)
// }

// console.log(fac2(2))


// const fac3 = (n) => {
//   return n < 2 ? 1 : n * (n -1)
// }

// console.log(fac3(3))


// const fac4 = (n) => {
//   return n < 2 ? 1 : n * (n -1)
// }

// console.log(fac4(4))


// const sumOfDigits = function sum(num) {
//   if(sum < 10) {
//     return sum
//   }
//   return (n % 10) + sum(Math.floor(n / 10))
// }

/*

sumDigits(123)
return 3 + 12 = 
result 15

sum(12) {
  return 2 + 1 = 3
}
result 3

sum(1) {
  return 1
}
result 1











*/


// function factorial(n) {
//   if(n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n -1);
// }

// console.log(factorial(2))


// function loop(x) {
 
//   if (x >= 10) {
//     return;
//   }
//   console.log(x)
//   loop(x + 1); 
// }
// loop(2);




// function foo(i) {
//   if (i < 0) {
//     return;
//   }
//   console.log(`begin: ${i}`);
//   foo(i - 1);
//   console.log(`end: ${i}`);
// }
// foo(3);
