function isMonotonic(array) {

  if (array.length === 0 || array.length === 1) return true;

  if (array.length === 2) return array[0] < array[1] || array[0] > array[1];

  if (array.every((val) => val < 0)) {
    return JSON.stringify(array.slice().sort((a,b) => Math.abs(a) - Math.abs(b))).indexOf(JSON.stringify(array)) >= 0;
  } else {
    return JSON.stringify(array.slice().sort((a,b) => a - b)).indexOf(JSON.stringify(array)) >= 0;
  }

}

const arr = [-1, -5, 10]

console.log(isMonotonic(arr))

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
