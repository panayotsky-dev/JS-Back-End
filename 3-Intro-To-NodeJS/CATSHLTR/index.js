const http = require('http')
const fs = require('fs/promises')
const homeHTML =  require('./resources/views/home/index.js');

const server = http.createServer(async (req,res)=>{
    console.log('server is called')
   
   res.writeHead(200,{
    'Content-Type' : 'text/html'
   });
   res.write(homeHTML)
   res.end()
})
server.listen(5000, () => console.log('This server is running on port 5000'))
// npm i nodemon -d  ==== instalva se samo za dev mode ne v krainiqt produkt