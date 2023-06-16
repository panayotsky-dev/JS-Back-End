const fs = require('fs')


const writeStream = fs.createWriteStream('./output.txt', {encoding: 'utf-8'})

writeStream.write('Chunk 1')
writeStream.write('Chunk 2')
writeStream.write('Chunk 3')
writeStream.write('Chunk 4')
writeStream.end();

//! първо чака да получи данни и като му кажем end() -> добре получих всичко и сега ще го "визуализирам"


// const fs= require('fs')
// const server = require('http').createServer();

// server.on('request', (req,res) => {
//     const src = fs.createReadStream('./input.txt');
//     src.on('data',data => res.write(data))
//     src.on('end', () => res.end())
// })

// server.listen(5000)