// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  // Write your code here.

  let sum = 0;

  array.forEach(e => {

    if(Array.isArray(e)) {
      sum += productSum(e, depth + 1);
    } else {
      sum += e
    }

  });

  return sum * depth;

}


const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

console.log(productSum(arr))
// Do not edit the line below.
exports.productSum = productSum;
