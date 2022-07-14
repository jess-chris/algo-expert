function findClosestValueInBst(tree, target) {
  
  let res, range

  let queue = [tree]

  while(queue.length !== 0) {


    let currentNode = queue.shift()

    if (res === undefined || Math.abs(currentNode.value - target) < range) {
      res = currentNode.value
      range = Math.abs(currentNode.value - target)
    }


    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)

  }

  return res

}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
