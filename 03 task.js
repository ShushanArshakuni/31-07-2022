function Calculator(initial) {
  this.initial = initial;

  this.plus = function (number) {
    this.number = number;
    this.result = this.initial + this.number;
  };
  this.minus = function (subtract) {
    this.subtract = subtract;
    this.result -= this.subtract;
  };
  this.multiply = function (multiple) {
    this.multiple = multiple;
    this.result *= this.multiple;
  };
  this.divide = function (devide) {
    this.devide = devide;
    this.result /= this.devide;
  };
  this.getResult = function () {
    return this.result;
  };
}
const calculator = new Calculator(0); // Initial result is 0

calculator.plus(5); // add 5 to the result
calculator.minus(3); // subtract 3 from result
calculator.multiply(3); // multiply result by 3
calculator.divide(2); // divide result on 2
console.log(calculator.getResult()); // Returns the result
console.log(calculator);
