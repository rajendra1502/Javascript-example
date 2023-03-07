// What is Promises
// A promises is an object, represent the eventual completion or failure of an asynchromous operation.

// Callback Hell
createOrder(cart, function(orderId){
  proceedToPayment(orderId, function(paymentInfo){
    updateWallet(orderID, function(){
        updateCart(orderId, function(){
            showOrder(orderId, function(){

            })
        })
    })
  })
})

// Write it using promises
const cart =  ['iphone', 'samsung', 'nokia', 'oneplus'];

createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId); // When you return the data here then you catch it into the chain, so don't forget to return it.
})
.then(function (paymentInfo){
    return updateWallet(paymentInfo);
})
.then(function (walletData){
    return updateCart(walletData);
})
.then(function (walletData){
    showOrder()
})
.catch(err, function(){
 console.log(err)
})

// Using arrow funtion

createOrder(cart)
.then(orderId     => proceedToPayment(orderId)) 
.then(paymentInfo => updateWallet(paymentInfo))
.then(walletData  => updateCart(walletData))
.then(walletData  =>  showOrder())
.catch(err        => console.log(err))