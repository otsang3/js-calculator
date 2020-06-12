var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it('can substract', function (){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('can divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('can concatenate multiple number clicks', function(){
    calculator.numberClick(10)
    calculator.numberClick(5)
    assert.equal(105, calculator.runningTotal)
  })

  it('can chain multiple operations together', function(){
      calculator.numberClick(10)
      calculator.operatorClick('+')
      calculator.numberClick(10)
      calculator.operatorClick('-')
      calculator.numberClick(5)
      calculator.operatorClick('=')
      assert.equal(15, calculator.runningTotal)
  })

  it('can clear click', function(){
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

});
