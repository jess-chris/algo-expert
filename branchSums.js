// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  
  const start = root
  const totals = []

  const addBranch = (node, totals, sum = 0) => {

    let currentNode = node
    sum += currentNode.value

    if (currentNode.left) {

      if (currentNode.right) addBranch(currentNode.right, totals, sum)

      while (currentNode.left) {
        currentNode = currentNode.left
        sum += currentNode.value

        if (currentNode.right) addBranch(currentNode.right, totals, sum)

      }

    } else {

      while (currentNode.right) {
        currentNode = currentNode.right
        sum += currentNode.value

      }
    }

    totals.unshift(sum)

  }

  addBranch(start, totals)

  return totals

}

// const root = new BinaryTree(1);
// root.left = new BinaryTree(2);
// root.left.left = new BinaryTree(4);
// root.left.left.left = new BinaryTree(8);
// root.left.left.right = new BinaryTree(9);
// root.left.right = new BinaryTree(5);
// root.left.right.left = new BinaryTree(10)
// root.right = new BinaryTree(3);
// root.right.left = new BinaryTree(6);
// root.right.right = new BinaryTree(7);

// const root2 = new BinaryTree(0);
// root2.left = null;
// root2.right = new BinaryTree(1);
// root2.right.left = null;
// root2.right.right = new BinaryTree(10)
// root2.right.right.left = null;
// root2.right.right.right = new BinaryTree(100)
// root2.right.right.right.left = null
// root2.right.right.right.right = null

// branchSums(root)
// branchSums(root2)

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
