// What is callback hell?
// Nesting of the multiple fuction those are depend to anothe one are called callback hell.

// Simple example

// firstFunction(args, function() {
//     secondFunction(args, function() {
//       thirdFunction(args, function() {
//         // And so on…
//       });
//     });
//   });


const cart =  ['iphone', 'samsung', 'nokia', 'oneplus'];

function createOrder(){  // Main function
    console.log('Order created successfully !')
}

function makePayment() {   // Should be execute after the createOrder()
    console.log('Payment made successfully!')
}

function updateCart(){ // Should be execute after the makePayment()
    console.log('After payment cart updated successfully!')
}

function updateWallet(){ // Should be update the after the updateCart()
    console.log('User wallet updated successfully!')
}

function showOrders(){ // And after it will desplay the history by executing the showOrder()
    console.log('Order summery !')
}


// Callback hell 

//api.createOrder();
//api.makePayment();
//api.updateCart();
//api.updateWallet();
//api.showOrders();

api.createOrder(cart, function(){
    api.makePayment(function(){
        api.updateCart(function(){
            api.updateWallet(function(){
                api.showOrders()
            })
        })
    })
})