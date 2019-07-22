var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
return this._isDivisibleBy(number, 3)
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
return this._isDivisibleBy(number, 5)
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
return this._isDivisibleBy(number, 15)
};











FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  if (number % divisor === 0) {
    return true;
  }

  else {
  return  false;
  }
};
