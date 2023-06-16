const fs = require('fs')

fs.readFile('./input.txt', 'utf-8', (err,text) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(text)
})
console.log('end');

//! когато работим с callback първият аргумент винаги е дали има грешка ( за грешка) , след него вече каквото искаме!