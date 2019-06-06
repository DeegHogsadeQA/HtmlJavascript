class Dog extends Animal{
    constructor(breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log('woof');
    }
}
