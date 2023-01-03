function moveElementToEnd(array, toMove) {

  return array.sort((a) => a !== toMove ? -1 : 0);

}

const arr = [2, 1, 2, 2, 2, 3, 4, 2];

console.log(moveElementToEnd(arr, 2))

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
