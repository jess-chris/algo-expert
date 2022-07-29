// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = []) {
    
    const nodes = [this]

    while (nodes.length) {
      const currentNode = nodes.shift()
      array.push(currentNode.name)
      nodes.unshift(...currentNode.children)
    }

    return array

  }
}



// Do not edit the line below.
exports.Node = Node;
