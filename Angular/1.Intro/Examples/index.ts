

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let message: string = '';

let messages: string[] = ['message 1', 'message 2'];


// let strictMessage: [number, Car] = [2, Car.peugeot];
// console.log(strictMessage)

const car: {
    engine: {
        power: number
    },
    doors: number,
} = {
    engine: {
        power: 245
    },
    doors: 24
} // object


namespace Vehicle {

    export enum Car {
        Peugeot,
        Citroen,
        Renault
    }

    export class Suv {
        constructor(public model: string) {
            this.model = model;
        }

        drive() {
            return `I am driving ${this.model}`;
        }
    }
}

const suv = new Vehicle.Suv('Renault');


class SmallerSuv extends Vehicle.Suv {

    constructor(model: string, private size: number) {
        super(model)
    }

    drive(): string {
        return super.drive() + ' called from child';
    }

    park(): void {
        console.log(`I am parking in size ${this.size}`);
    }
}

const smallerSuv = new SmallerSuv('Renault', 4);
// console.log(smallerSuv.drive());

function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

// printLabel({label: 'Hello world!'});

function identity<T>(arg: T): T {
    return arg;
}




const myVar = identity<string>('5adfsdf dfgsd f');

console.log(myVar);


import NumberValidator from './validator';

const data = new NumberValidator();
console.log(data.validate('asdf'));



