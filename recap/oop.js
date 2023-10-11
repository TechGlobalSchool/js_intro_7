const person1 = {
    name: 'John',
    age: 25,
    eat: function () {
        console.log('Eat');
    }
}

const person2 = {
    name: 'Jane',
    age: 30,
    eat: function () {
        console.log('Eat');
    }
}


// using constructor
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function () {
        console.log('Drive');
    }
}

const car1 = new car('BMW', 'X6', 2022);
const car2 = new car('Tesla', 'S', 2023);

car1.drive(); // Drive
car2.drive(); // Drive


// ES6 classes
class Cat {
    constructor (name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    makeSound() {
        console.log('Meow');
    }
}

const cat1 = new Cat('Tom', 'Gray', 5);
const cat2 = new Cat('Lucy', 'Yellow', 3);
const cat3 = new Cat('Simba', 'Black', 1);

console.log(cat1); // Cat { name: 'Tom', color: 'Gray', age: 5 }
cat1.makeSound(); // Meow
cat2.makeSound(); // Meow