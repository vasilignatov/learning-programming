// const obj = {
//     name: 'Peter',
//     age: 21
// }
// console.log(obj);

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// Object.defineProperty(obj, 'lastName', {
//     value: 'Jackson',
//     writable: true,
//     configurable: true,
//     enumerable: false
// })

// for (const key in obj) {
//     console.log(key, obj[key]);
// }
// console.log('-'.repeat(30));
// console.log(obj.lastName);
'use strict';
const collection = {};

Object.defineProperty( collection, 'size', {
    get: function() {
        return Object.keys(this).length;
    }
})

collection['John'] = '+1-555-555-69'
collection['Meri'] = '+1-555-555-75'
collection['Foncho'] = '+1-555-555-61'

// console.log(Object.getOwnPropertyDescriptor(collection, 'John'));
// Object.freeze(collection);
// console.log(Object.getOwnPropertyDescriptor(collection, 'John'));

console.log(Object.getPrototypeOf(collection));


