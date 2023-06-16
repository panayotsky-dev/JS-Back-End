const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./input.txt',{highWaterMark : 10000})

    //* v1

    // readStream.on('data',(chunk)=>{
    //     res.write(chunk);

    // })
    // readStream.on('end', () =>{
    //     res.end();
    // })

    //* v2

    readStream.pipe(res)

    //! realno responsa e istinski writeStream ,a requesta readStream
})
server.listen(5000, ()=> console.log('serve is listening on port 5000'))
