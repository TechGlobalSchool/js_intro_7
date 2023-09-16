/**
 * Object literal
 */ 
const person = {
    name: 'Yuliia',
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
};
console.log(person);

function createPerson(name) {
    let obj = {};
    obj.name = name,
    obj.greet = function() {
        console.log(`Hello, my name is ${obj.name}`)
    }
    console.log(obj);
    return obj;
}

const yulia = createPerson('Yulia');
const alex = createPerson('Alex');
const joe = createPerson('Joe');

yulia.greet();


/**
 * Prototypical Chain
 */

// Create a new date object
const date = new Date('December 17, 1995 03:24:00');
console.log(date);
console.log(typeof date); // object

// These methods coming from Date 
const fullyear = date.getFullYear();
console.log(fullyear);
console.log(typeof fullyear);

// These methods coming from Object 
console.log(date.toString());
console.log(typeof date.toString());
console.log(date.toLocaleDateString());
console.log(typeof date.toLocaleDateString());

// date -> Date -> Object -> null


/**
 * 1.Constructor function
 */

const Animal = function(name, breed) { 
    this.name = name;
    this.breed = breed;
}

Animal.prototype.getDetails = function() {
    console.log(`${this.name} is a ${this.breed}`)
}

const Cat = function(name, breed) {
    // call
    Animal.call(this, name, breed)
}

Cat.prototype.meow = function() {
    console.log('meow');
}

const Dog = function(name, breed) {
    Animal.call(this, name, breed)
}

Dog.prototype.bark = function() {
    console.log('bark');
}


// Link prototypes
Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat;
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


const cat1 = new Cat('Leo', 'Bengal');
console.log(cat1);
console.log(cat1.getDetails());

const dog = new Dog('Lia', 'French Bulldog');
console.log(dog);
console.log(dog.getDetails());


/**
 * 2. Class
 */

class Animal2 {
    constructor(name, breed) {
        // header
        this.name = name;
        this.breed = breed;
    }
    // class body
    static getDetails() {
        console.log(`${this.name} is a ${this.breed}`)
    }
}

// const animal = new Animal2('Animal name');
// console.log(animal)
// animal.getDetails();


class Cat2 extends Animal2 {
    #owner;
    constructor(name, breed) {
        super(name, breed) // it calls parent class constructor
        this.#owner = 'Ihar';
    }

    meow() {
        console.log('meow')
    }
}

const cat2 = new Cat2('Leo', 'Bengal');
console.log(cat2)
// cat2.getDetails();
// cat2.meow();
// Cat2.meow();
console.log(cat2.owner);


class Dog2 extends Animal2 {
    constructor(name, breed) {
        super(name, breed) // it calls parent class constructor
    }

    bark() {
        console.log('bark')
    }
}

const dog2 = new Dog2('Lia', 'French Bulldog');
console.log(dog2)
dog2.getDetails();
dog2.bark();

/**
 * Object.create() => Look up examples and compare
 */

/**
 * Getter and Setter
 */

class Person {
    #name = 'Joe'

    getName() {
        return this.#name;
    }
    setName(val) {
        this.#name = val;
        // return val;
    }

    get name1() {
        return this.#name;
    }
    set name1(val) {
       if(val === 'admin') {
        this.#name = val;
       }
    }
}
const p = new Person();
// console.log(p.name);
// console.log(p.getName());
// p.setName('Igor');
// console.log(p.getName());


console.log(p.name);
console.log(p.name1);
// p.set = 'Igor';
p.name1 = 'Igor';
console.log(p.name1);

p.name  // undefined
getName() // Joe



