const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('user-add', (username,age) =>{
    console.log(`New user is added: ${username} ${age} years old`)
})




eventEmitter.on('user-add', () =>{
    console.log('New user is added 2')    
        
})


eventEmitter.on('user-del', () =>{
    console.log('New user is deleted')
})


eventEmitter.emit('user-add','Strahil',40)



eventEmitter.emit('user-del')




