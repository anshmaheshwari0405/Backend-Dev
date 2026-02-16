// const fs = require('fs');
// const path = require('path');

// const inputStream = path.resolve(__dirname, '', 'input.txt')
// const outputStream = path.resolve(__dirname, '', 'output.txt')

// const readStream = fs.createReadStream(inputStream)
// const writeStream = fs.createWriteStream(outputStream)

// readStream.pipe(writeStream);

// console.log('file copied successfully');



// const fs = require('fs');
// const path = require('path');

// const inputFilePath = path.join(__dirname, 'input.txt')
// const outputFilePath = path.join(__dirname, 'output.txt')

// const readStream = fs.createReadStream(inputFilePath, {encoding : "utf-8"})
// const writeStream = fs.createWriteStream(outputFilePath, {encoding : "utf-8"})

// readStream.pipe(writeStream);   

// writeStream.on('finish', () => {
//     console.log('Data has been written to output.txt successfully.');
// });