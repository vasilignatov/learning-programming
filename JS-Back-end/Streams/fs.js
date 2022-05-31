import { writeFile } from 'fs';
import { Buffer } from 'buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message123.txt', data, (err) => {
    if(err) throw err;
    else console.log('The file is created');
})