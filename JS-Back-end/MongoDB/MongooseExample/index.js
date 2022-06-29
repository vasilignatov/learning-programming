const initDb = require('./dbCionfig');
const Person = require('./Models/Person');

initDb()
    .then(() => {
        // //first way to create
        // let person = new Person({
        //     firstName: 'Someone',
        //     lastName: 'Nqkoisi',
        //     age:25
        // });

        // person.save()
        //     .then(() =>{
        //         console.log('Person saved!');
        //     });

        //Secon way to create a db record
        Person.create({
            firstName: 'Someone',
            lastName: 'Nqkoisi',
            age: 25
        })
            .then(person => {
                console.log('Person created!');
                console.log(person); // return record from db
            });



    });