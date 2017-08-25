

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  // create our tuple
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;

  if (bucket.length) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push(tuple);
      }
    }
  } else {
    bucket.push(tuple);
  }
  this._storage.set(index, bucket);
  this._size++;
  this.checkTableAndResizeIfNeeded();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._size--;
      this.checkTableAndResizeIfNeeded();
    }
  }
};

HashTable.prototype.resizeTable = function(limit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(limit);
  this._size = 0;
  this._limit = limit;
  
  // capture old table
  var result = [];
  oldStorage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        result.push([bucket[i][0], bucket[i][1]]);
      }
    }  
  });
  // reinsert tuples to new table
  for (var j = 0; j < result.length; j++) {
    var index = getIndexBelowMaxForKey(result[j][0], limit);
    var bucket = this._storage.get(index) || [];
    bucket.push(result[j]);
    this._storage.set(index, bucket);
    this._size++;
  }
};

HashTable.prototype.checkTableAndResizeIfNeeded = function() {
  if (this._size > 1) {
    if ( (this._size / this._limit) > 0.75 ) {
      this.resizeTable(this._limit * 2);
    } else if ( (this._size / this._limit) < 0.25 ) {
      this.resizeTable(this._limit / 2);
    }
  }  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */


