class Phone {
    constructor(brand, price){
        console.log('I am constructor of Phone');
        this.brand = brand;
        this.price = price;
    }
}

const phone1 = new Phone('IPhone', 100);
const phone2 = new Phone('Samsung', 50);

console.log(phone1.brand);

class MobilePhone extends Phone {
    constructor(brand, price){
        console.log('I am constructor of MobilePhone creating the object');
        super(brand, price);
    }
}

const m = new MobilePhone('abc', 123);
