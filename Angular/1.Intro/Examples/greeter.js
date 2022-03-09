class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello ' + this.greeting;
    }
}
const greeter = new Greeter('world!');
console.log(greeter.greet());
 