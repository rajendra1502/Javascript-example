// http://latentflip.com/
// 1. What is callback?
// Ans : Callback is a fuction that is passed as an argument to another function, That execute the callback based on the result.

// Case 1 :
 
function result(callback){   // Main function
    console.log('Main function execute')
    return add(2, 5);
}

function add(a, b){  // Callback function
    console.log('Now callback function execute')
   return a + b;
 }

result()


// Case 2 :

function add (a, b){  // function 1 for Add the two arguments
 return a + b;
}

function multiple (a, b) { // Function 2 for Multiple the two arguments
    return a * b;
}

function calculate(callback, a, b) { // Callback function
    return callback(a, b)
}

console.log('Call Add functiona as a callback', calculate(add , 2, 3));
console.log('Call Multiple functiona as a callback', calculate(multiple , 2, 3));