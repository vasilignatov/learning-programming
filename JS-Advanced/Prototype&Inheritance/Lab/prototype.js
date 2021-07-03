// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

// }

// Person.prototype.write = function(message) {
//     console.log(`Person ${this.firstName} ${this.lastName}: ${message}`);
// }

// const proto = {
//     write(message) {
//         console.log(`Person ${this.firstName} ${this.lastName}: ${message}`);
//     }

// }

// const p1 = new Person('Vas', 'Ign');
// const p2 = new Person('Vas', 'Ign');

// function newOperator(constructor, ...params) {
//     // allocate memory and assign prototype
//     const result = Object.create(proto)

//     // execute constructor woth params inside memory context
//     constructor.apply(result, params);

//     // return memory reference;
//     return result;
// }



// const firstPerson = newOperator(Person, 'Vasil', 'Ignatov');
// console.log(firstPerson);



function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.write = function(message) {
    console.log(`Person ${this.firstName} ${this.lastName}: ${message}`);
}


let a = new Person('asdf', 'asdf');

console.log(Person.__proto__);
console.log(Person.prototype);
