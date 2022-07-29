function sortedSquaredArray(array) {

  return array.map((ele)  => ele * ele).sort((a,b) => a - b);
  
}

let arr1 = [1, 2, 3, 5, 6, 8, 9];

console.log(sortedSquaredArray(arr1))

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
