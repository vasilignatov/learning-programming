const initDb = require('./dbConfig');
const Course = require('./models/Course');

// initDb()    
//     .then(() => {
//          return Course.deleteOne({_id: ''})
//     }) 
//     .then(res => {
//         // returns {deleteCount: 1}
//         console.log(res);
//     })

async function findByIdDelete(id) {
    await initDb();

    await Course.findOneAndDelete(id);
}

findByIdDelete('62bee7258048753557a39e70');
