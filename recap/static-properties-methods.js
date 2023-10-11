class MathHelper {
    static PI = 3.14;
    info() {
        console.log('I am information!');
    }

    static getRandomNumber(a, b) {
        return Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b) + 1)) + Math.min(a, b);
    }
}

// Difference between static and non-static function
console.log(MathHelper.getRandomNumber(5, 8));
console.log(MathHelper.PI); // 3.14

//console.log(MathHelper.info()); // ERROR as info method is not static
const mh = new MathHelper();
mh.info(); // I am information!

/*
Static methods and properties can be accessed with class name
While non-static methods and properties are accessed with an object of the class
*/