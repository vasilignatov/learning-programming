// function Foo(who) {
//     this.me = who;
// }

// Foo.prototype.identify = function () {
//     return 'I am ' + this.me;
// }

// function Bar(who) {
//     Foo.call(this, who);
// }

// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function() {
//     console.log('Hello ' + this.identify() + '.');
// }
// let b1 = new Bar('b1');
// let b2 = new Bar('b2');
// b1.speak()
// b2.speak()



class Person {
    constructor(name) {
        this.name = name;
    }
    greating() {
        return this.name + ' says hi!';
    }
}


class Employee extends Person {
    constructor(name, salary) {
        super(name)
        this.salary = salary;
    }
}


const peter = new Employee('Peter', 5000);
console.log(peter)

