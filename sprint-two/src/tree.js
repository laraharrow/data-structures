var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  newTree.parent = parent || null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.traverse = function(cb) {
  cb(this);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    var parentTree = this.parent;
    this.parent = null;
    for (var i = 0; i < parentTree.children.length; i++) {
      if (parentTree.children[i].value === this.value) {
        parentTree.children.splice(i, 1);
        return;   
      }
    } 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 traverse: O(n)
 */
