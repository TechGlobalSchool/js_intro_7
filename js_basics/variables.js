let fname = "John"; // string
let age = 25; // number - integer
let address = "Chicago"; // string

age = 30; 

console.log("My name is " + fname); // concatenation
console.log('Age is ' + age); // Age is 25
console.log(`The city is ` + address); // The city is Chicago


//console.log(city); // ReferenceError: city is not defined

var lname; // declaration

console.log(lname); // undefined

lname = "Doe"; // assignment

console.log(lname); // Doe

lname = "Morgan"; // re-assignment

console.log(lname); // Morgan


//DIFFERENCES bt let and const
const street = "S River";
console.log(street); // S River

street = "N River"; // re-assignment
console.log(street); // N River