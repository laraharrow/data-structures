var Queue = function() {
  //var instanceObj = Object.create(Queue.prototype);
  var instanceObj = Object.create(queueMethods);
  instanceObj.storage = {};
  instanceObj.count = 0;
  instanceObj.first = 0;
  return instanceObj;
};

// Queue.prototype.enqueue = function(value) {
//   this.storage[this.count + this.first] = value;
//   this.count++;
// };
// Queue.prototype.dequeue = function() {
//   if (this.count > 0) {
//     var result = this.storage[`${this.first}`];
//     delete this.storage[`${this.first}`];
//     this.first++;
//     this.count--;
//     return result;
//   }  
// };
// Queue.prototype.size = function() {
//   return this.count;
// };
// var queueMethods = {};
var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count + this.first] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      var result = this.storage[`${this.first}`];
      delete this.storage[`${this.first}`];
      this.first++;
      this.count--;
      return result;
    }  
  },
  size: function() {
    return this.count;
  }
};