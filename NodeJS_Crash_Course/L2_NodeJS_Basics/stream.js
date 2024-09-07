const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt');
readStream.on('data',(dataChunck) =>
{
    console.log(`---- NEW DATA CHUNCK ----`);
    console.log(dataChunck);
    writeStream.write(dataChunck);
});

// Piping
readStream.pipe(writeStream);