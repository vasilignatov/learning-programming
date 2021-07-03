
const obj = {
    location: {lat:14, lon: 61}
};


Object.defineProperty(obj, 'lat', {
value: 50
})
console.log(Object.getOwnPropertyDescriptor(obj, 'lat'));
