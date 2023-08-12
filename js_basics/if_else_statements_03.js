

let name = "John";

if(name.toLowerCase().startsWith("j")) console.log("PARTY");
else console.log("SORRY");


/*
Write a program that generates a random number between -3 and 3 (both inclusive).

Print them being and EVEN and ODD
Print them being POS, NEG and ZERO

Test Data:
0

Expected Output:
EVEN
ZERO

Test Data:
3

Expected Output:
ODD
POS
*/


function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num = getRandomNumber(-3, 3);
console.log("The random number is = " + num);

if(num % 2 === 0) console.log("EVEN");
else console.log("ODD");


if(num > 0) console.log("POS");
else if(num < 0) console.log("NEG");
else console.log("ZERO");


/*
Write a function named as checkDLAge it takes an argument as an age
And returns true if the age is more than 15
returns false if the age is less than 16

EXAMPLES:
checkDLAge(10)  -> false
checkDLAge(15)  -> false
checkDLAge(16)  -> true
checkDLAge(25)  -> true
*/

function checkDLAge(age){
    return age > 15;
}

console.log(checkDLAge(10)); // false
console.log(checkDLAge(15)); // false
console.log(checkDLAge(16)); // true
console.log(checkDLAge(25)); // true


/*
Retirement age = 65

if the age is more than or equals 65 -> You can be retired!
if the age is less than 65;
    64 -> You have 1 year left to get retired!
    55 -> You have 10 years left to get retired!
    43 -> You have 22 years left to get retired!
*/

let age = 65;

if(age >= 65) console.log("You can be retired!");
else{
    if(age === 64) console.log("You have 1 year left to get retired!");
    else console.log(`You have ${65 - age} years left to get retired!`);
}

if(age < 65){
    if(age === 64) console.log("You have 1 year left to get retired!");
    else console.log(`You have ${65 - age} years left to get retired!`);
}
else console.log("You can be retired!");


if(age >= 65) console.log("You can be retired!");
else if(age === 64) console.log("You have 1 year left to get retired!");
else console.log(`You have ${65 - age} years left to get retired!`);