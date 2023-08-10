

/*
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is ONE" if the generated number is one
*/

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
} 

let num = getRandomNumber(0, 1);

if (num === 0) {
    console.log("The number is ZERO");
}
else {
    console.log("The number is ONE");
}


/*
Generate a random number between 1 and 10 (both inclusive)
Print "The number is EVEN" if the generated number is even
Print "The number is ODD" if the generated number is odd
*/

let num2 = getRandomNumber(1, 10);

console.log("The number is = " + num2);

if(num2 % 2 === 0) {
    console.log("The number is EVEN");
} 
else {
    console.log("The number is ODD");
}


/*
Generate a random number between -2 and 2 (both inclusive)
Print "The number is POSITIVE" if the generated number is positive
Print "The number is NEGATIVE" if the generated number is negative
Print "The number is ZERO" if the generated number is zero
*/

let num3 = getRandomNumber(-2, 2); 
console.log("The number is = " + num3); // 2

if(num3 < 0) {
    console.log("The number is NEGATIVE");
}
else if(num3 > 0) {
    console.log("The number is POSITIVE");
}
else {
    console.log("The number is ZERO");
}