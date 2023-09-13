// SCOPE
const schoolName = "Tech Global";

function schoolProfile() {
    const schoolName = "Global Tech";
    function saySchoolName() {
        const schoolName = "Tech";
        function writeSchoolName() {
            const schoolName = "Global";
            return schoolName;
            // return "Global";
        }
        return writeSchoolName();
    }
    return saySchoolName();
}

console.log(schoolProfile());
// Scope chaining
// writeSchoolName() scope ---> saySchoolName() scope ---> schoolProfile() scope ---> global scope



// Define a function:
function getCityName() {
    const cityName = "Des Plaines";
    return cityName;
}

// function showAddress() {
//     return "2860 River Rd" + cityName;
// }

function showAddress() {
    return "2860 River Rd, " + getCityName();
}
console.log(showAddress());


// HOISTING
console.log("foo:", foo); // undefined
var foo = 'foo';

console.log("fizz:", fizz); // ReferenceError: Cannot access 'fizz' before initialization 
console.log("buzz:", buzz); // ReferenceError: Cannot access 'buzz' before initialization
let fizz = 'fizz';
const buzz = 'buzz';

hello();
// bye();
function hello(){
    bye();
    console.log("Hello");
    bye();
    function bye() {
        console.log("Bye");
    }
}

