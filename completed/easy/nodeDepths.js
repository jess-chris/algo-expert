function nodeDepths(root) {
  
  let count = 0
  let depth = 1
  const start = root

  const countDepth = ((node, depth) => {

    let currentNode = node
    
    while (currentNode) {
      
      if (currentNode.left) {
        count += depth
      }

      if (currentNode.right) {
        count += depth
        countDepth(currentNode.right, depth + 1)
      }


      depth++

      currentNode = currentNode.left

    }

    return count
  })

  return countDepth(start, depth)


}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// const root = new BinaryTree(1);
// root.left = new BinaryTree(2);
// root.left.left = new BinaryTree(4);
// root.left.left.left = new BinaryTree(8);
// root.left.left.right = new BinaryTree(9);
// root.left.right = new BinaryTree(5);
// root.right = new BinaryTree(3);
// root.right.left = new BinaryTree(6);
// root.right.right = new BinaryTree(7);

// console.log(nodeDepths(root))

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
