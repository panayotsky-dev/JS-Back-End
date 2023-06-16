const eventBus = require('./eventBusV3')

const unsubscribe =eventBus.subscribe('user-add', (username,age) =>{
    console.log(`New user is added: ${username} ${age} years old`)
})

//!unsubscribe 


eventBus.subscribe('user-add', () =>{
    console.log('New user is added 2')    
        
})


eventBus.subscribe('user-del', () =>{
    console.log('New user is deleted')
})


eventBus.publish('user-add','Strahil',40)

//! До тук ще се изпълнява само евента user-add,а ремоув няма защото не сме го публишнали

eventBus.publish('user-del')

//! Тези които публикуват не трябва да се интересуват дали някой слуша или не.Единствено трябва да си публикуват!!!

//! Създаваме евентите в събскрайбърите

unsubscribe()
eventBus.publish('user-add','Strahil',40)
