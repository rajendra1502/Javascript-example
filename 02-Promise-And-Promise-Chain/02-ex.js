// Creating Promises, Chaining & Error Handling

const cart =  ['iphone', 'samsung', 'nokia', 'oneplus'];




const createOrder = (cart) => {
    console.log('Create order executed !')
  let pr =  new Promise(function (resolve, reject){
      let validCart = validateCart();
      let orderId = '12346789'
       if(validCart){
           resolve(orderId);
       } else {
           const err = new Error('Cart is valid');
           reject (err)
       }
  })
  return pr;
}

const validateCart = () => {
    console.log('Validate the cart executed !');
    return true;
}

const proceedToPay = (orderId) => {
    return new Promise(function (resolve, reject) {
       resolve(`Payment made successfully! for : ${orderId}`) 
    })
}

const updateWallet = (paymentId) => {
    //let paymentId = false;
    let pr = new Promise(function (resolve, reject){
     if(paymentId){
        console.log('...In update wallet') 
        resolve(paymentId)
    } else {
        let err = new Error('Unable to update wallet')
        reject(err)
    }    
    })
    return pr;
}

const promise = createOrder(cart)
.then(function(orderId){
    console.log('Chain no 1..', orderId)
    return orderId;
})
.then(function(orderId){
  console.log('Chain no 2..', orderId)    
  return proceedToPay(orderId)    
})
.then(function(paymentId){
    console.log('Chain no 3..', paymentId)
    return updateWallet(paymentId)
})
.catch(function(err){   // Will not execute if there is an error in any attached method
    console.log(err)
})


// if want to execute attached method after getting the error, 
// then use catch after the every then

const promiseWithCatch = createOrder(cart)
.then(function(orderId){
    console.log('Chain no 1..', orderId)
    return orderId;
})
.catch(function(err){   // Will not execute if there is an error in any attached method
    console.log(err)
})
.then(function(orderId){
  console.log('Chain no 2..', orderId)    
  return proceedToPay(orderId)    
})
.catch(function(err){   // Will not execute if there is an error in any attached method
    console.log(err)
})
.then(function(paymentId){
    console.log('Chain no 3..', paymentId)
    return updateWallet(paymentId)
})
.catch(function(err){   // Will not execute if there is an error in any attached method
    console.log(err)
})