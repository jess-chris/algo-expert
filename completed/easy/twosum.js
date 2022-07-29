function twoNumberSum(array, targetSum) {
  
  for (let x = 0; x < array.length - 1; x++) {

    for (let y = x + 1; y < array.length; y++) {

      if (array[x] + array[y] === targetSum) return [array[x], array[y]];

    }
  }

  return [];

}

let arr1 = [3, 5, -4, 8, 11, 1, -1, 6]
let tar1 = 10;

let arr2 = [3, 5, -4, 8, 11, 1, -1, 6]
let tar2 = 234;

console.log(twoNumberSum(arr1, tar1))
console.log(twoNumberSum(arr2, tar2))

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
