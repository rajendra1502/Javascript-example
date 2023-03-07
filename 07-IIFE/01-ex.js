// What is IIFE (Immediately Invoked Function Expression)?
// A JavaScript immediately invoked function expression is a function defined 
// as an expression and executed immediately after creation. 
// The following shows the syntax of defining an immediately invoked function expression:

(function(){
    //...
})();


//If you have many global variables and functions, the JavaScript engine will only release the memory 
// allocated for them until the global object loses its scopes.

// As a result, the script may use the memory inefficiently. 
// On top of that, having global variables and functions will likely cause name collisions.

// One way to prevent the functions and variables from polluting the global object is to use 
// immediately invoked function expressions.

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum);