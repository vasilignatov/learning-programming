function testTrutyFalsy(value){
    if(value){
        return console.log('Is truty');
    } else {
        return console.log('Is falsy');
    }
}

testTrutyFalsy(undefined);

// class Person {
//     constructor (firstName, secondName, age){
//         this.firstName = firstName;
//         this.secondName = secondName;
//         this.age = age;
//     }

//     sayHi(){
//         console.log(`${this.firstName} says hello`)
//     }
// }
// let newPerson2 = new Person('Vas', 'Ign', 27)
// let newPerson = new Person('Vasil', 'Ignatov', 27)
// newPerson2.sayHi()
// newPerson.sayHi()

