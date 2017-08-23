var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count + this.first] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var result = this.storage[`${this.first}`];
    delete this.storage[`${this.first}`];
    this.first++;
    this.count--;
    return result;
  }  
};
Queue.prototype.size = function() {
  return this.count;
};