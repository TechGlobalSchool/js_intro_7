let firstName = "John", lastName = "Doe";

let age, address, favNumber;

age = 25, address = "IL", favNumber = 4;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(address);
console.log(favNumber);

console.log(firstName + " " + lastName); // John Doe
console.log(age + favNumber); // 29

console.log(address + age); // IL25

console.log(favNumber + firstName); // 4John

console.log(age + favNumber + address); // 29IL
console.log(address + (age + favNumber)); // IL29
console.log(address + age + favNumber); // IL254

console.log(favNumber * 2 + age); // 33

// My fullname is John Doe.
console.log("My fullname is " + firstName + " " + lastName + "."); // "My fullname is John Doe."