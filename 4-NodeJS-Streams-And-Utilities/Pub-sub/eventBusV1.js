const listeners = {

}

const publish = (eventName) => {
    listeners[eventName]?.forEach(listener => listener());
    //припомням optional chaining -> listeners[eventName]? ако няма ще си върне undefined и няма да гръмне
    
}

const subscribe = (eventName,eventListener) => {
    if(!listeners[eventName]){
        listeners[eventName] = []; //Празният масив е true проверка и по този начин ще прескочи тази проверка
    }
    listeners[eventName].push(eventListener) 
}

const eventBus =  {
    publish,
    subscribe,
}
console.log(listeners)
module.exports = eventBus