const sum = (a,b) => a + b; // arrow function

const multiply = function (a,b) { // function expression
    return a*b; 
}
function substract (a,b) {  //function declaration
return a - b ;
}

exports.sum = sum;
exports.multiply=multiply;
exports.substract=substract;

//* exports.sum = (a,b) => a + b; moje i taka
