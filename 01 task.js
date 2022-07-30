const obj = {};

obj.setName = function (name) {
  this.name = name;
};
obj.getName = function () {
  return this.name;
};

obj.setName("John");
console.log(obj.getName());
console.log(obj);
