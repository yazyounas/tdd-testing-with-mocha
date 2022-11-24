var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it(' it will test if the output of 5! is equal to 120', () => {
      //setup
      const expectedResult = 120;

      //Excercise
      const inputNumbers = 5;
      const result = Calculate.factorial(inputNumbers);

      //Varify
      assert.equal(result, expectedResult);

    });
    it(' it will test if the output of 3! is equal to 6', () => {
      //setup
      const expectedResult = 3;

      //Excercise
      const inputNumbers = 3;
      const result = Calculate.factorial(inputNumbers);

      //Varify
      assert.equal(result, expectedResult);
    });
      it('returns 1 when you pass in 0.', ()=>{
       const expectedResult = 1;
       const inputArray = 0;
       const result = Calculate.factorial(inputArray);
       assert.strictEqual(result, expectedResult)
    });

  });
});