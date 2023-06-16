const fs = require('fs')
const readStream = fs.createReadStream('./input.txt')
const writeStream = fs.createWriteStream('./output.txt')

readStream.on('data', (chunk)=>{
    writeStream.write(chunk);
})
readStream.on('end', () =>{
    writeStream.end();
})

//! Този метод се нарича Pipe / пайпинг ,но не се прави точно така в следващият файл се показва


//* debugging


// const fs = require('fs')
// const path = require('path')

// const readStream = fs.createReadStream(path.resolve(__dirname, 'input.txt')) //правим го да има абсолютен път 
// const writeStream = fs.createWriteStream(path.resolve(__dirname,'./output.txt'))

// readStream.on('data', (chunk)=>{
//     writeStream.write(chunk);
// })
// readStream.on('end', () =>{
//     writeStream.end();
// })
