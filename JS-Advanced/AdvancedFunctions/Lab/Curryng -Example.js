function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(sum3(1)(2)(3));

