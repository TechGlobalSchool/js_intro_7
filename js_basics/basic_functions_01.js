
// Write a function that takes an argument and prints "Hello ${argument}"
function sayHello(arg){
    console.log(`Hello ${arg}`);
}

sayHello("Alex");
sayHello("Ramadan");
sayHello("Ivan");
sayHello(123);
sayHello(true);

// TRICKY PART
sayHello("Igor", "Alex");
sayHello(); 
sayHello("Alex, Igor, 123, true, abc");


// Write a function that takes 2 arguments and returns their sum
function sum(arg0, arg1){
    return arg0 + arg1;
}


let variable = sum(5, 10);
console.log(variable); // 15

console.log(sum(20, 100)); // 120