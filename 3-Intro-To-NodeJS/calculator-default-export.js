const sum = (a,b) => a + b; // arrow function

const multiply = function (a,b) { // function expression
    return a*b; 
}
function substract (a,b) {  //function declaration
return a - b ;
}
// module.exports = { //!Anonimen(default) export - losha praktika dobree e da se naimenovat
//     sum : sum,      //*propertito sum mu assign-vame referenciq kym sum
//     multiply,
//     substract,          

// }

//* po tozi nachin pravim default  export no naimenuvan
const calculator = {
    sum,
    multiply,
    substract,
}
module.exports = calculator;
