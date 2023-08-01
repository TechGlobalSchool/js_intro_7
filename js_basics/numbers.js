let num1 = 5, num2 = 10.5;

console.log(num1); // 5
console.log(num2); // 10.5

console.log(num1 + num2); // 15.5
console.log(num1 * num2); // 52.5
console.log(num1 - num2); // -5.5


let a = 2, b = 5, c = "10", d = "20";
console.log(a + b); // 7
console.log(c + d); // "1020"
console.log(d / a); // 10

// NaN - Not a Number operator
console.log(NaN); // NaN
console.log(typeof NaN); // number

console.log("  " * 5); // 0
console.log("" * 5); // 0
console.log("hello" * 5); // NaN
console.log("Hello" + NaN); // HelloNaN

console.log(0 / 0); // NaN
console.log(0 / 5); // 0 
console.log(5 / 0); // Infinity

// Infinity & -Infinity
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN

// isNaN() function
console.log(isNaN(5)); // false
console.log(isNaN(10.5)); // false
console.log(isNaN("Hello")); // true

console.log(isNaN(true)); // false
console.log(isNaN(true + 5)); // false


let number = new Number(20);
console.log(typeof number); // object


// BigInt
let i1 = 12345678901234567890;
let i2 = 12345678901234567890n;
let i3 = BigInt(12345678901234567890n);
let i4 = 1;

console.log(i1); // 12345678901234567000
console.log(i2); // 12345678901234567890n
console.log(i3); // 12345678901234567890n

console.log(i2 + BigInt(i4));

