const mongodb = require('mongodb');

const client = new mongodb.MongoClient('mongodb://localhost:27017');
//default installation goes to this port;

client.connect()
    .then(() => {
        console.log('Conected!');
        const db = client.db('myDb');
        const collection = db.collection('courses');

        return collection.find({});
    })
    .then(people => {
        return people.toArray();
    })
    .then(people => {
        console.log(people)
    })
    .catch(err => console.log(err))

