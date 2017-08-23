var Stack = function() {
  //var instanceObj = Object.create(Stack.prototype);  
  var instanceObj = Object.create(stackMethods);
  
  instanceObj.count = 0;
  instanceObj.storage = {};
  return instanceObj;
};

// Stack.prototype.push = function(value) {
//   this.storage[this.count] = value;
//   this.count++;
// };
// Stack.prototype.pop = function() {
//   if (this.count > 0) {
//     this.count--;
//     let result = this.storage[`${this.count}`];
//     delete this.storage[`${this.count}`];
//     return result;
//   }
// };
// Stack.prototype.size = function() {
//   return this.count;
// };
var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      let result = this.storage[`${this.count}`];
      delete this.storage[`${this.count}`];
      return result;
    }
  },
  size: function() {
    return this.count;
  }
};
