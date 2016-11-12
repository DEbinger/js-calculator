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
    function _load(x) {
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
    function _getTotal(x) {
         return _total;
    }

      /**
       * Sums the value passed in with `total`
       * @param { Number } x
       */
    function _add(x) {
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
    function _subtract(x) {
        if (typeof x === 'number'){
          _total -= x;
          return _total;
        }else{
          throw new Error();
        }
    }

      /**
       * Multiplies the value by `total`
       * @param  { Number } x
       */
    function _multiply(x) {
        if (typeof x === 'number'){
          _total *= x;
          return _total;
        }else{
          throw new Error();
        }
    }

      /**
       * Divides the value passing in by `total`
       * @param  { Number } x
       */

    function _divide(x) {
        if (typeof x === 'number'){
          _total /= x;
          return _total;
        }else{
          throw new Error();
        }
    }
      /**
       * Return the value stored at `memory`
       * @return { Number }
       */
    function _recallMemory() {
          return _memory;
    }

      /**
       * Stores the value of `total` to `memory`
       */
    function _saveMemory() {
          _memory = _total;
    }

      /**
       * Clear the value stored at `memory`
       */
    function _clearMemory() {
          _memory = 0;
    }
      /**
       * Validation
       */
    function _Validation(){}
        return {
          load: _load,
          getTotal: _getTotal,
          add: _add,
          subtract: _subtract,
          multiply: _multiply,
          divide: _divide,
          recallMemory: _recallMemory,
          saveMemory: _saveMemory,
          clearMemory: _clearMemory
        };
 }