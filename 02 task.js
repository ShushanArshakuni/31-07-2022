const obj = {};

obj.setSum = function (initialNumber) {
  this.initialNumber = initialNumber;
};
obj.getSum = function () {
  return this.initialNumber;
};
obj.add = function (additiveNumber) {
  this.initialNumber += additiveNumber;
};

obj.setSum(10);
obj.add(20);
console.log(obj.getSum());
obj.setSum(100);
console.log(obj.getSum());
