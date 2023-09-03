const numbers = [1, 5, 7, 40, 16, 15, 20];

const numbersSorted = numbers.sort();

console.log(numbersSorted); // [ 1, 15, 16, 20, 40, 5, 7 ]
console.log(numbers); // // [ 1, 15, 16, 20, 40, 5, 7 ]

const numbersReallySorted = numbers.sort((x, y) => x - y);

console.log(numbersReallySorted); // [ 1,  5,  7, 15, 16, 20, 40 ]