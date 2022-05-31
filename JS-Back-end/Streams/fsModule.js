// const fs = require('fs');
const fs = require('fs/promises');

// Sync
// const text = fs.readFileSync('./index.html', {encoding: 'utf8'}, (err, data) => {
//     console.log(typeof data);
// })  


// Async
// fs.readFile('./index.html', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(typeof data);
// })


//Promises
// fs.readFile('./index.html', 'utf8')
//     .then(text => {
//         console.log(text);
//     }).catch(err => {
//         console.log(err);
//     })
// console.log('End');


// Functions
async function readFile(path) {
    let text = await fs.readFile(path, 'utf8');
    console.log(text);
}

readFile('./index.html')

