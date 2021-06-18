function adressBook(input) {
    let catalogObj = {};

    // crating object
    for (let line of input) {
        let [name, adress] = line.split(':');
        catalogObj[name] = adress;
    }
    //createing arrays
    let sorted = Object.entries(catalogObj)                //sorting arrays
    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`);

    }
}
adressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);