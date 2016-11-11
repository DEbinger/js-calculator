/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var calculator = {};
  var _memory = 0;
  var _total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
function load(x) {
    if (typeof x === 'number'){
     _total = x;
      return _total;
   }else{
     throw new Error();
   }
}
  /**
   * Return the value of `total`
   * @return { Number }
   */
function getTotal(x) {
  return _total;
}

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
function add(x) {
  if (typeof x === 'number'){
  _total += x;
  return _total;
  }else{
    throw new Error();
  }
}

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
function subtract(x) {
  _total -= x;
}

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
function multiply(x) {
  _total *= x;
}

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

function divide(x) {
  _total /= x;
}
  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
function recallMemory() {
  return _memory;
}

  /**
   * Stores the value of `total` to `memory`
   */
function saveMemory() {
  _memory = _total;
}

  /**
   * Clear the value stored at `memory`
   */
function clearMemory() {
  _memory = 0;
}
  /**
   * Validation
   */
function Validation(){}
  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };
 }