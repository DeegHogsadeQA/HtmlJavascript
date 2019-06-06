class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    breathe(){
        console.log('*breathing*');
    }

    live(){
        console.log('not dead');
    }

    eat(){
        console.log('*munch*');
    }
    
}

class Dog extends Animal{
    constructor(breed, name, age) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log('woof');
    }
}
dog = new Dog('border collie', 'dogName', 6);
dog.bark();
console.log(dog.name);
dog.breathe();
dog.live();
dog.eat();