//!if you make some changes and you go to check them on live server, there will be not included, because you need to restart the server.
//! Always we need to have response.end ( res.end())

const http = require('http')

const server = http.createServer((req,res)=> {
    console.log('server is called')
    console.log(req.method)
    console.log(req.headers.host)
    console.log(req.url)
    res.writeHead(201,{
        CustomHeader : 'someValue'
    })
    res.write('Hello from the server!Updated version')
    
    res.end();
})
server.listen(5000);
console.log('Server is running on port 5000')