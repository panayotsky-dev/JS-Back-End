const eventBus = require('./eventBusV1')
eventBus.subscribe('user-add', () =>{
    console.log('New user is added')
})
eventBus.subscribe('user-add', () =>{
    console.log('New user is added 2')
})

eventBus.subscribe('user-del', () =>{
    console.log('New user is deleted')
})


eventBus.publish('user-add')

//! До тук ще се изпълнява само евента user-add,а ремоув няма защото не сме го публишнали

eventBus.publish('user-del')

//! Тези които публикуват не трябва да се интересуват дали някой слуша или не.Единствено трябва да си публикуват!!!

//! Създаваме евентите в събскрайбърите
