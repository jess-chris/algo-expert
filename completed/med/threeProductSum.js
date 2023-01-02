function threeNumberSum(array, targetSum) {

  const sumArray = [];

  for (let x = 0; x < array.length - 2; x++) {

    for (let y = x + 1; y < array.length - 1; y++) {
      
      for (let z = y + 1; z < array.length; z++) {

        if (array[x] + array[y] + array[z] === targetSum) {

          let triplet = [array[x], array[y], array[z]].sort((a,b) => a - b);

          if (JSON.stringify(sumArray).indexOf(JSON.stringify(triplet)) < 0) {
            sumArray.push(triplet);
          }
        }
      }
    }
  }

  return sumArray.sort((a,b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })

}

const arr = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6];
const sum = 0;

console.log(threeNumberSum(arr, sum));

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
