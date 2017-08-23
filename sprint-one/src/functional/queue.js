var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count + first] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var result = storage[first];
      delete storage[`${first}`];
      first++;
      count--;
      return result;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
