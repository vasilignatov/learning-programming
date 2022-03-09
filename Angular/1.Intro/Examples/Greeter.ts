class Greeter {
    public greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() : string {
        return 'Hello ' + this.greeting;
    }
}

const greeter: Greeter = new Greeter('world!');
console.log(greeter.greet());
