var Stack = function() {
  var instanceObj = {
    count: 0,
    storage: {}
  };
  _.extend(instanceObj, stackMethods);
  return instanceObj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[`${this.count}`];
      return result;
    }  
  },
  size: function() {
    return this.count;
  }
};


