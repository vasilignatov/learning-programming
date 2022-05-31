const fs =require('fs');

const readableStream = fs.createReadStream('./index.html', {
    encoding: 'utf8',
    highWaterMark: 1024
});

readableStream.on('data', function(chunk) {
    console.log('NEW CHUNK');
    console.log('NEW CHUNK');
    console.log('NEW CHUNK');
    console.log('NEW CHUNK');
    console.log(chunk);
});


readableStream.on('end', () => {
    console.log('Stream Ended');
})