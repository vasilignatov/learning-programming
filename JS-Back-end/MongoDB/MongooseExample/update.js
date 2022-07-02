const initDb = require('./dbConfig');
const Course = require('./models/Course');

// initDb()
//     .then(() => {
//         return Course.updateOne({ _id: '62beb990b4613e3b152357e1' }, { $set: { students: 5 } })
//     })
//     .then(res => {
//         console.log('Updated!!!');
//         console.log(res);
//     })

async function updateMany() {
    await initDb();

   const updated = await Course.updateMany({students:{ $exists: false}}, {$set: {students: 10}});

   console.log(updated);
}

updateMany();