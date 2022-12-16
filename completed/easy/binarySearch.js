function binarySearch(array, target, index = Math.floor(array.length / 2)) {
  // Write your code here.

  if (array[index] === target) return index;
  if (array[index - 1] === target) return index - 1;
  if (array[index + 1] === target) return index + 1;
  if (index === 0  || index === array.length - 1) return -1

  if (array[index] < target) {

    index = index + (Math.floor(index / 2));
    
    return binarySearch(array, target, index);
    
  } else if (array[index] > target) {
    
    index = Math.floor(index / 2);

    return binarySearch(array, target, index);

  } 

}


const arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

console.log(binarySearch(arr, 72))

// Do not edit the line below.
exports.binarySearch = binarySearch;
