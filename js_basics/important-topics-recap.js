// Keyword "this"

function printName(name) {
    console.log(this) // window or object
    console.log(name);
}

printName('Ulan');

// Implicit binding

const person = {
    name: 'Alan',
    age: 29,
    printName() {
        console.log(this.name); // value of this?
        console.log(this); 
    },
    mother: {
        hobbies: ['running', 'baking'],
        name: 'Jane',
        printName() {
            console.log(this.name); // value of this?
            console.log(this);
        }
    }
}

person.printName(); // Alan, this = person object
person.mother.printName(); // this = mother

// Function is not inside the object
const person1  = {
    name: 'Alan',
    age: 29,
}

const person2  = {
    name: 'Alex',
    age: 30,
}
function printName1() {
    console.log(this.name) // Alan
    // this(window) => this(person1)
}

printName1(); // undefined

// Call without argument(s)
printName1.call(person1);

// Call with arguments
function printHobbies(h1, h2, h3) {
    console.log(`Hi. My name is ${this.name} and my hobbies are ${h1}, ${h2} and ${h3}`);
}

const hobbies = ['Reading', 'Coding', 'Fishing'];
printHobbies.call(person1, hobbies[0], hobbies[1], hobbies[2]);
printHobbies.call(person2, hobbies[0], hobbies[1], hobbies[2]);

// Apply
printHobbies.apply(person1, hobbies);

// Bind
const bindedPrintHobbies  = printHobbies.bind(person1, hobbies[0], hobbies[1], hobbies[2]);

bindedPrintHobbies();


// this keyword inside "normal function" vs "arrow function"

function logMessage() {
    console.log('this inside normal function', this);
}

const logMessage2 = () => {
    console.log('this inside arrow function', this);
}

logMessage();
logMessage2();

const person3 = {
    name: 'Bali',
    languages: ['English', 'Albaninan', 'Arabic', 'Chinese'],
    printLanguages() {
        const modifiedLang = this.languages.map(function(lang) {
            return ` ${this.languages.length} - ${lang}`;

        }.bind(this)
        )
        console.log(modifiedLang) // []
    }
}

person3.printLanguages();

const person4 = {
    name: 'Bali',
    languages: ['English', 'Albaninan', 'Arabic', 'Chinese'],
    printLanguages() {
        const modifiedLang = this.languages.map((lang) => {
            return ` ${this.languages.length} - ${lang}`;

        })
        console.log(modifiedLang) 
    }
}

person4.printLanguages();

// person3 -> printLanguages() -> map(callback function).bind(this(person3))


// Closure data privacy example
function generateToken () {
    let token = 'cdscdc12323';
    return () => {
        console.log(token);
    }
}

const generateTokenForAdmins = generateToken(); // 
const generateTokenForUsers = generateToken(); // 
// console.log(token); // function

generateTokenForAdmins(); // token
generateTokenForUsers(); // token