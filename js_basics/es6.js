/**
 * LET and CONST
 */

// Reassignment
// String
let fname = 'Alex';
const lname = 'Hunter';

fname = 'Jane'; // OK
lname = 'Doe'; // Error: Assignment to constant variable.

console.log(fname);
// Number
let num1 = 10;
const num2 = 12;

num1 = 11; // OK
num2 = 13; // Error: Assignment to constant variable.

console.log(num1);

// Boolean
let bool1 = true;
const bool2 = true;

bool1 = false; // OK
bool2 = false; // Error: Assignment to constant variable.

console.log(bool1);

const car = {
    type: 'sport',
    year: 2008
}
car.year = 2023;
console.log(car);

// Using variable before its declaration

let student = 'John';
console.log(student); // 'John'

const student2 = 'John';
console.log(student2); // 'John'

console.log(student3); // Cannot access 'student3' before initialization
let student3 = 'John';

console.log(student4); // Cannot access 'student3' before initialization
const student4 = 'John';

console.log(student5); // undefined but not error
var student5 = 'John';

// Template Literals
const jsOutput =   `
In this chapter, we’ll learn how to output text or data using the console.log() method.

console.log() is a built-in function used to log/print given text or data to the console.
It is primarily used for debugging and troubleshooting purposes.
You can see the values passed into this function in the console of a web browser or a JavaScript runtime environment.
Overall, console.log() is a useful tool for developers to inspect and monitor the behavior of their JavaScript code by printing relevant information to the console.
`;

let sum= 0;
var numbers = [1, 2, 3];
numbers.forEach((n) => sum+=n);
console.log(sum);