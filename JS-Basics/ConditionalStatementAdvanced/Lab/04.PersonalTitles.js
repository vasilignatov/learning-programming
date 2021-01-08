function solve(age, sex) {
    age = Number(age);
    sex = String(sex);

    if (sex === "m") {
        if (age >= 16) {
            console.log('Mr.')
        }else console.log('Master');

    } else if (sex === "f") {
        if (age >= 16) {
            console.log('Ms.')
        }else console.log('Miss');
    }
}