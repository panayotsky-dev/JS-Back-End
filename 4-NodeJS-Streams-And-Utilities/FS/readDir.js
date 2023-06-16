const fs = require('fs')

let data = fs.readdir('../FS','utf-8',(err,data) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})
//! result is array of strings

// //*CReate directory
// fs.mkdirSync('./myDir') // sync

// fs.mkdir('./myDir', err=> {  //async
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('Directory was created!')
// })
// //

// //*Delete directory
// fs.rmdirSync('./myDIr'); //sync

// fs.rmdir('./myDir',err => {
//     if(err){
//         console.log(err);
//         return
//     }
// })
// //

// //*Rename dir
// fs.renameSync('./oldName','./newName') // sync

// fs.rename('./oldName','./newName', err =>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

// //

// //*Delete file
// fs.unlinkSync('./target.txt') //sync

// fs.unlink('./target.txt', err =>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

