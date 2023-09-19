// Create a simple to-do list
// Objective is to practice OOP classes and callbacks, promises and async await

/*

    Step 1: Create a class Todo and TodoManager


    Step 2: Todo class will have a properties of: 
        id: number
        title: string
        description: string 
        e. Create a function to delete a list from my array of lists.

*/

class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createAt = new Date();
    }
};

class TodoManager {
    constructor() {
        this.AllTodos = [];
    }
    // createATodo() => asynchronous task (callback, promise, async/await)
    createATodo(newTodo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.AllTodos.push(newTodo);
                resolve('Successfully added new todo');
            }, 2000);
        })

    }

    // listTodos() => asynchronous task
    listTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.AllTodos)
            }, 2000)
        })
    }

    // updateATodo() => asynchronous task

    // you can have many more
};

// Relate async code with Todo activity ?
const todoManager = new TodoManager();
// create todo
todoManager.createATodo(new Todo(1, 'Watch TV', 'On weekend and this show'))
    .then((message) => {
        console.log(message);
    })
    .catch(err => console.log(err));


todoManager.createATodo(new Todo(2, 'Go to grocery', 'On saturday only'))
.then((message) => {
    console.log(message);
})
.catch(err => console.log(err));

// list all todos
todoManager.listTodos()
.then(todos => {
    todos.forEach((todo) => {
        console.log(todo);
    })
})
.catch(err => console.log(err));


/*
 Activity: 2

 Give me a random number between 10-20 by waiting(delay) 
 5 seconds and using promise 
 Show a message "Number is valid" if its bigger than 15
 else output "Number is invalid"
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};


// 1 getting part
const getRandomNumber = () => {
    let randomNumber = getRandomIntInclusive(10, 20);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(randomNumber);
        }, 5000);
    })
    // In real world => you might request https://expedia.com which might take some time to open
} 

// 2 assertion part
let rndNumner = getRandomNumber();

console.log(rndNumner); // Promise
console.log(rndNumner === 15); // false, Promise != number

getRandomNumber()
.then(num => {
    console.log(num); // any random number
    if(num > 15) console.log('Number is valid')
    else console.log('Number is invalid')
})
.catch(err => console.log(err));

// Async Await

async function resolveRandomNumber() {
    try {
        let randNum =  await getRandomNumber();
        console.log(randNum); // any random number
        if(randNum > 15) console.log('Number is valid ----')
        else console.log('Number is invalid ----')
    } catch(err) {
        console.log(err);
    }
}
resolveRandomNumber();

// Cypress

// cy.open(https://expedia.com)
// cy.wait()
// .then()
// cy.find('button');
// cy.wait();
// cy.assert('SEARCH')










