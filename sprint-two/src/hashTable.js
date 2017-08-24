

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var insertionValue = this._storage.get(index) || {};
  insertionValue[k] = v;
  this._storage.set(index, insertionValue);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var insertionValue = this._storage.get(index);
  return insertionValue[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var insertionValue = this._storage.get(index);
  delete insertionValue[k];
  this._storage.set(index, insertionValue);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */


