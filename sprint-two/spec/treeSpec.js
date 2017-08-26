describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it ('should have no children on newly added nodes', function() {
    tree.addChild(5);
    expect(tree.children[0].children).to.eql([]);
  });
  
  it ('should traverse through the entire tree', function() {
    tree.addChild(1);
    tree.addChild(3);
    tree.children[0].addChild(5);
    tree.children[0].addChild(7);
    tree.children[1].addChild(9);
    tree.traverse(function(node) {
      if (node.value) {
        node.value += 1;
      }  
    });
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(4)).to.equal(true);
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
    expect(tree.contains(10)).to.equal(true);
  });
  
  it ('should have a parent', function() {
    var tree = Tree(5);  
    tree.addChild(7);
    expect(tree.children[0].parent.value).to.equal(5);
  }); 
  
  it ('should not set roots parent on removeFromParent', function() {
    tree.removeFromParent();
    expect(tree.parent).to.equal(null);
  }); 
  
  it ('should remove parent and child association on removeFromParent', function() {
    tree.addChild(3);
    tree.addChild(7);
    var seven = tree.children[1];
    seven.addChild(10);
    var ten = seven.children[0];
    ten.removeFromParent();
    expect(ten.parent).to.equal(null);
    expect(seven.children).to.eql([]);
  });
});











