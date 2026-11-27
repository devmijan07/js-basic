// // parseFloat() method


// const pixel = '10px';
// console.log(parseFloat(pixel))


// const flolatingNumber = '10.5px';
// console.log(parseFloat(flolatingNumber))

// console.log(Number.parseFloat === parseFloat)






// // Number.parseInt() method
// const pixel = '10.5px';
// console.log(parseInt(pixel))



// console.log(1 / 0);    // Infinity

// console.log(-1 / 0);   // -Infinity

// console.log(0 / 0);    // NaN

// console.log(5 / Infinity); // 0

// console.log(Infinity / Infinity); // NaN





// // IsInteger()
// function fits(x, y) {
//     if(Number.isInteger(y / x)) {
//         return "Fits!";
//     } 
//     return "Does NOT fit"
// }

// console.log(fits(4, 10))



console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-100000)); // true
console.log(Number.isInteger(99999999999999999999999)); // true

console.log(Number.isInteger(0.1)); // false
console.log(Number.isInteger(Math.PI)); // false

console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(false)); // false
console.log(Number.isInteger([1])); // false

console.log(Number.isInteger(5.0)); // true
console.log(Number.isInteger(5.000000000000001)); // false
console.log(Number.isInteger(5.0000000000000001)); // true, because of loss of precision
console.log(Number.isInteger(4500000000000000.1)); // true, because of loss of precision
console.log(5.00000000000000001 === 5);
console.log(Number.isInteger(9007199254740991));