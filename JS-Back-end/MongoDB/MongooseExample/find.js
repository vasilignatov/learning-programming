const initDb = require('./dbConfig');
const Course = require('./models/Course');

// initDb();

// Course.find({})
//     .then(c => {
//         // console.log(c);
//         c.forEach(x => console.log(x.haveStuds));
//     })


async function getCourses() {

    await initDb();
    const courses = await Course.find({students:{ $exists: false}});
    console.log(courses);
}

async function getCourse() {

    await initDb();
    const course = await Course.findOne({
        name: 'ThreeJS Course'
    });
    console.log(course);
}

async function getById(id) {
    await initDb();
    const course = await Course.findById(id);
    console.log(course);
}

getCourses();
// getCourse();
// getById('62beec78051055bf8d18388e');
