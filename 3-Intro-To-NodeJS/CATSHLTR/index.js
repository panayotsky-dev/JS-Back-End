const http = require('http')
const {homeTemplate,catTemplate} = require('./views/home/index')
const siteCss = require('./content/styles/site')
const addBreed = require('./views/addBreed')

const cats = [
    {
        id:1,
        name:'Navcho',
        breed:'Persian',
        description:'Very cute cat',
    },
    {
        id:2,
        name:'Asd',
        breed:'Persian',
        description:'Very  cat',
    },
    {
        id:3,
        name:'DFS',
        breed:'FF',
        description:'Very ',
    },
    {
        id:4,
        name:'GDFS',
        breed:'Zzzz',
        description:'cat',
    },
]
//!правим промяна на файловете от html/ css на js ,защото в това упражнение 
//! не знаем уж още как се борави с файловата система(fs)

// const fs = require('fs/promises');// Връща promises модула на FS
// const fs = require('fs') //Връща callback модула на FS


const server = http.createServer(async (req,res)=>{
// const homeHtml = await fs.readFile('./views/home/index.html');
// console.log(homeHtml);
console.log(req.url);
if(req.url == '/'){
    // const pattern = /{{catName}}|{{breed}}|{{imageUrl}}|{{description}}/g
    const catsHtml = cats.map(cat => catTemplate.replace('{{catName}}', cat.name))
    const homeHtml = homeTemplate.replace(`{{cats}}`, catsHtml)
    res.writeHead(200,{
        "Content-Type" : 'text/html'
        })
    res.write(homeHtml)
}else if (req.url == '/content/styles/site.css'){
    res.writeHead(200,{
        "Content-Type" : 'text/css'
        })
   res.write(siteCss)
}else if (req.url == '/cats/add-breed'){
    res.writeHead(200,{
        "Content-Type" : 'text/html'
        })
   res.write(addBreed)
}


res.end();
})

server.listen(5000, () => ('This server is running on port 5000!'))

// automatic refresh - >
// npm i nodemon -D 
// -D - dev dependencies => libraryes that you don't need for the final product,
// but you need them for developing the product
// -D Библиотеки, които не са нужни за крайният продукт, но са необходими при разработването му!