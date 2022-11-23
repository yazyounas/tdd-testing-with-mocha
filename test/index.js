const Calculate = {
    factorial(inputNumber) {
        return (inputNumber <= 1) ? 1: inputNumber * this.factorial(inputNumber-1);
    
    
    /* for (let i = inputNumber - 1; i >= 1; i--) {
    inputNumber = inputNumber * i; 
  }
   return inputNumber*/
    }
  }
  
  module.exports = Calculate;