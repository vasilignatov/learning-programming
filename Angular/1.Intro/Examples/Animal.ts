class Animal {
    move(distanceInMeters: number = 0): void {
        console.log('Animal moved ' + distanceInMeters + ' m.');
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof! Woof!');
    }
}

const animal = new Animal();
const dog = new Dog();

animal.move(25);
dog.move(45);
dog.bark();