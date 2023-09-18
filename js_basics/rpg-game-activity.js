// Create Character class

class Character {
    constructor(name, profession, gender, age, strength, hitpoints) {
        this.name = name;
        this.profession = profession;
        this.gender = gender;
        this.age = age;
        this.strength  = strength;
        this.hitpoints = hitpoints;
    }
    /**
     * @returns null
     */
    printStats() {
        console.log(`My name is ${this.name}, profession is ${this.profession} my gender is ${this.gender}
        age is ${this.age} i have that much power ${this.strength} and my hit point ${this.hitpoints}`);
    }

    /**
     * @returns boolean
    */
    isAlive() {
        if(this.hitpoints > 0) {
            console.log(`${this.name} is alive`);
            return true;
        }
        console.log(`${this.name} is dead`);
        return false;
    }

    /**
     * @argument object
     * @returns null
    */
    attack(attackedCharacter){
        attackedCharacter.hitpoints -= this.strength;
    }

    /**
     * @returns null
    */
    levelUp() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }

}


const mario = new Character('Mario', 'farmer', 'male', 100, 8, 50);
const lara = new Character('Lara Soft', 'fighter', 'female', 40, 10, 20);

console.log(mario);
console.log(lara);

// stats summary
mario.printStats()
lara.printStats()

// levelUp
mario.levelUp();
lara.levelUp();

// stats summary
mario.printStats()
lara.printStats()

// attack on characters
lara.attack(mario); // Mario(75 hitpoints), Lara(15 strenght) => 75-15=60
// mario.attack(lara);

// stats summary
mario.printStats()
lara.printStats()

