class Person {
    eat() {
        console.log('Eat');
    }

    sleep() {
        console.log('Sleep');
    }
}


class Dancer extends Person {
    dance() {
        console.log('Dance');
    }
}


class Tester extends Person {
    test() {
        console.log('Test');
    }
}

const tester1 = new Tester();
tester1.eat();
tester1.sleep();
tester1.test();
