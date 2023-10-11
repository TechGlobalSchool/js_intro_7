const person = {
    eat: function () {
        console.log('Eat');
    },
    sleep: function () {
        console.log('Sleep');
    },
    run: function () {
        console.log('Run');
    }
};

const singer = {
    sing: function () {
        console.log('Sing');
    },
    __proto__: person
}

const programmer = {
    code: function () {
        console.log('Code');
    },
    __proto__: person
};

person.eat();
person.sleep();
person.run();

singer.eat();
singer.sleep();
singer.run();
singer.sing();

programmer.eat();
programmer.sleep();
programmer.run();
programmer.code();