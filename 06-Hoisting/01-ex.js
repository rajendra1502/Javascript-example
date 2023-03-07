// What is Hoisitng ?
// When the JavaScript engine executes the JavaScript code, 
// it creates the global execution context. The global execution context has two phases:

// Creation (Memory allocation)
// Execution (Coding)

// During the creation phase, 
// the JavaScript engine moves the variable and function declarations to the top of your code. 
// This is known as hoisting in JavaScript.


// Ex 1

function add(a, b){
    return a + b;
}

let a = 20,
    b = 10;

let result1 = add(a,b);
console.log(result1); // 👉 30

// Ex 2 :

let x = 20,
    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y; 

