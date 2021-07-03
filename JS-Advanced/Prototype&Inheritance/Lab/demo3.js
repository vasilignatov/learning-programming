const obj = {};

Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: false
})

console.log(obj.name);
obj.name = 'asdf'
Object.defineProperty(obj, 'name', {
    writable: false
})

console.log(obj.name);