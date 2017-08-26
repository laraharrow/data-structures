var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.right = undefined;
  bst.left = undefined;
  return bst;
};

BinarySearchTree.prototype.insert = function(newValue) {
  // right  
  if (this.value < newValue) {
    // we found a spot - insert!
    if (this.right === undefined) {
      this.right = BinarySearchTree(newValue);
    } else {
      this.right.insert(newValue);
    }
  } else {  // left
    // we found a spot - insert!
    if (this.left === undefined) {
      this.left = BinarySearchTree(newValue);
    } else {
      this.left.insert(newValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.value < target) {
    // right
    if (this.right && this.right.contains(target)) {
      return true;
    }
  } else {  // left
    if (this.left && this.left.contains(target)) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  
  // right
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  // left
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var queue = [this];
  while (queue.length) {
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    cb(queue[0]);
    queue.shift();
  }
};

BinarySearchTree.prototype.isBalanced = function() {
  var leftHeight = 0; 
  var rightHeight = 0;
  var max, min;
  
  if (this.left) {
    leftHeight = this.left.getHeight() + 1;
  }
  if (this.right) {  
    rightHeight = this.right.getHeight() + 1;
  }
    
  if (leftHeight > rightHeight) {
    max = leftHeight;
    min = rightHeight;
  } else {
    max = rightHeight;
    min = leftHeight;
  }
  return min * 2 > max;  
};

BinarySearchTree.prototype.rebalance = function() {
  while (!this.isBalanced()) {
    var leftHeight = 0;
    var rightHeight = 0;
    if (this.left) {
      leftHeight = this.left.getHeight() + 1;
    }
    if (this.right) {
      rightHeight = this.right.getHeight() + 1;
    }
    if (leftHeight > rightHeight) {
      var leftChild = this.left;
      if (leftChild.left.getHeight() + 1 > leftChild.right.getHeight() + 1) {
        // LL
        // root = this (50)
        // pivot = root.left(20)
        // root.left = pivot.right (25)
        // pivot.rigth  = root
        
        var rootTree = this;
        var pivot = rootTree.left;
        rootTree.left = pivot.right;
        pivot.right = rootTree;
                
      } else {
        //LR
      }
    } else {
      var rightChild = this.right;
      if (rightChild.right.getHeight() + 1 > rightChild.left.getHeight() + 1) {
        //RR
      } else {
        //RL
      }
      
    }  
  }    
};

BinarySearchTree.prototype.getHeight = function() {
  var leftHeight = 0;
  var rightHeight = 0;

  if (!this.left && !this.right) {
    return 0;
  }

  if (this.left) {
    leftHeight = this.left.getHeight() + 1;
  }

  if (this.right) {
    rightHeight = this.right.getHeight() + 1;
  }
  
  // returns max depth of the tree
  return (leftHeight > rightHeight) ? leftHeight : rightHeight;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthFirstLog: O(n)
 breadthFirstLog: O(n)
 */
