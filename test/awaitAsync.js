
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();
/*const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}
nativePromiseDinner();

// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal= await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
   let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);

  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
     }
}
hostDinnerParty();
*/
