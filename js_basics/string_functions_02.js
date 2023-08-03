// String - Searching
let text = "Can I can a can";

// search

let result1 = text.search("can");
let result2 = text.search("Can");

console.log(result1); // 6
console.log(result2); // 0


// Tricky part
console.log(text.search("")); // 0
console.log(text.search(" ")); // 3
console.log(text.search("  ")); // -1
console.log(text.search("Hello")); // -1

console.log(text.search(text)); // 0
console.log(text.search("Can I can")) // 0

console.log(text.search("n c")); // -1
console.log(text.search("n a")); // 8

console.log(text.search("Can I can two cans")); // -1


// includes() function
let quote = "I can do it";

let r1 = quote.includes("can");
let r2 = quote.includes("it"); 
let r3 = quote.includes("IT");

console.log(r1); // true
console.log(r2); // true
console.log(r3); // false

// Tricky part
console.log(quote.includes(quote)); // true
console.log(quote.includes("")); // true
console.log(quote.includes(" ")); // true
console.log(quote.includes("  ")); // false
