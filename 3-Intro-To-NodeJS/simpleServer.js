//!if you make some changes and you go to check them on live server, there will be not included, because you need to restart the server.


const http = require('http')

const server = http.createServer((req,res)=> {
    console.log('server is called')
    res.write('Hello from the server!Updated version')
    res.end();
})
server.listen(5000);
console.log('Server is running on port 5000')