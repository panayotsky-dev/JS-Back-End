const fs = require('fs')

const text = 'Az sym bylgarche obicham';

fs.writeFile ('./output.txt',text,'utf-8', (err) => {
    if(err){
        console.log('There were an error!')
        console.log(err)
    }
    console.log('The file was saved successfully!')
})