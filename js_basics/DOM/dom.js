// DOM - Document Object Model

// window object
console.log("window", window); // ReferenceError: window is not defined


// alert
// window.alert('Here is the alert message!');


// prompt
// let promptResult = window.prompt();
// console.log(promptResult); // null || string value


// confirm
// let confirmRrsult = window.confirm('Are you ready?');
// console.log(confirmRrsult); // true || false

// innerWidth and innerHeight
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log("height", innerHeight); // without window

// scrollTo(x,y);
// window.scrollTo(0,0); // scroll page to the top

// location - object
// window.location.reload(); // reloads page

// locaStorage
console.log(window.localStorage.length); // 0 empty

// Set item into localStorage
window.localStorage.setItem('name', 'John'); 
window.localStorage.setItem('isLoggedIn', false); 
window.localStorage.setItem('userId', 1234); 
window.localStorage.setItem('userInfo', JSON.stringify({ name: 'John', email: 'john@gmail.com'}));
window.localStorage.setItem('userWalletTypes', JSON.stringify(['apple', 'google', 'cc']));

// Get item from localStorage
console.log(window.localStorage.getItem('name')); // John
console.log(window.localStorage.getItem('isLoggedIn')); // false
console.log(window.localStorage.getItem('userId')); // 1234
console.log(JSON.parse(window.localStorage.getItem('userInfo'))); // { name: 'John', email: 'john@gmail.com'}
console.log(JSON.parse(window.localStorage.getItem('userWalletTypes'))); // ['apple', 'google', 'cc']

// remove item from localStorage
window.localStorage.removeItem('name');
window.localStorage.removeItem('userId');

window.localStorage.clear(); // clear everything from localStorage


/*
    Activity

    1. Ask user a name => prompt()
        1.1. Alert users name => alert()
        1.2. Console log 'You didn't provided your name. Bye Bye!' and quit.

    2. Confirm if user wants to continue => confirm()
        3.1 If user says 'YES' => Alert 'You have chosen to continue'
        3.2 If user says 'NO' => Alert 'You canceled the action'

    3. Console log users browser innerWidth and innerHeight

    4. Reload the page after 10 seconds to start again. => setTimeout, location.reload()
*/


if(username || username === '') {
    // do all logic 2,3,4
    alert(username) // null or empty
} else {
    // bye bye
}