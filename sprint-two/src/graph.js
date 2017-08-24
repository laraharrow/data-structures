

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

var GraphNode = function (value) {
  this.value = value;
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.storage[newNode.value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage[node]) {
    // make sure to remove edges if node is deleted
    var edges = this.storage[node].edges;
    for (var k in edges) {
      this.removeEdge(edges[k], node);
    }
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].edges[toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode; 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode]; 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this.storage) {
    cb(this.storage[k].value);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1
 contains: O(1)
 removeNode: O(n), where n is the number of edges
 hasEdge: O(1)
 addEdge: O(1)
 removeEdge: O(1)
 forEachNode: O(n)
 */


