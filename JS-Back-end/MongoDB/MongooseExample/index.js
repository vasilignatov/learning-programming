const initDb = require('./dbConfig');
const Course = require('./models/Course');



initDb()
    .then(() => {
        // // First way to create db record
        // let course = new Course({
        //     name: 'VanilaJS Course'
        // });
        // // use this methood when we need to create extra logic and then save the record!
        // course.save();

        // Second war- with static method of the class;
        Course.create({
            name: 'JS Advances Cource',
            students: 10
        })
        .then(c => {
            console.log('Course created!');
            console.log(c);
        })
        .catch(err => {
            console.log(err.message);
        });
    });