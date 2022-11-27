const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.') ;
    } else {
      reject('That item is sold out.')
   }
  }
  const orderSunglasses = () => {
    return new Promise(myExecutor);
  }
  const orderPromise = orderSunglasses();
  console.log(orderPromise);
  /*
  console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code

const usingSTO = () => {
  console.log('This is the first line of synchronous code.or “This is the last line of synchronous code.')

}
setTimeout(usingSTO, 100);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.")


PROMISES FROM TWO JS FILES
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

module.exports = { checkInventory };

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
}

checkInventory(order).then(handleSuccess, handleFailure);
HANDLE WITH CATCH 
checkInventory(order)
 .then(handleSuccess)
 .catch(handleFailure);
