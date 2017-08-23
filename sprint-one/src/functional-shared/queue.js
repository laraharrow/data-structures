var Queue = function() {
  var instanceObj = {
    count: 0,
    storage: {},
    first: 0
  };
  _.extend(instanceObj, queueMethods);
  return instanceObj;
};

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


