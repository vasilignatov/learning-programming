function personInfo(firstName, lastName, age) {
    let obj = {
        fName: firstName,
        lName: lastName,
        a: age
    }

    return obj
}
console.log(personInfo("Peter",
    "Pan",
    "20"
));