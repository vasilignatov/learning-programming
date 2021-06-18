function emloyees(arr) {
//     class Person {
//         constructor(name) {
//             this.name = name,
//             this.number = name.length;
//         }
//         print() {
//             return `Name: ${this.name} -- Personal Number: ${this.number}`;
//         }
//     }
//     arr = arr.map(x => new Person(x))
//         .forEach(element => {
//         console.log(element.print());
//     });
//     console.log(arr);
// }

let employees = [];
arr.forEach(element => {
    let person = {
        name: element,
        number: element.length
    }
    employees.push(person)
    console.log(employees);
})
employees.forEach(element => {
    console.log(`Name: ${element.name} -- Personal Number: ${element.number}`)
})
emloyees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)




// let employees = {};
// for (let line of arr) {
//     employees[line] = line.length;
// }

// Object.entries(employees).forEach(element => {
//     console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
// });




let employees2 = [];
arr.forEach(element => {
    let person = {
        name: element,
        number: element.length
    }
    employees.push(person)
})
employees.forEach(element => {
    console.log(`Name: ${element.name} -- Personal Number: ${element.number}`)
})











