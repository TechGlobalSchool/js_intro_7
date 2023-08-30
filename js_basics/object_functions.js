const student = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    fullName: function (){
        return `${this.fName} ${this.lName}`;
    },
    info: function (){
        return `${this.fullName()}'s age is ${this.age}.`;
    }
};

console.log(student.fName); // Alex
console.log(student.age); // 30
console.log(student.fullName); // [Function: fullName]
console.log(student.fullName()); // Alex Smith

console.log(student.info); // [Function: info]
console.log(student.info()); // Alex Smith'a age is 30.