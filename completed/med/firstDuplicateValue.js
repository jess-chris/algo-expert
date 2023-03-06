function firstDuplicateValue(array) {
  
  const obj = {};

  for (let x = 0; x < array.length; x++) {

    if (obj[array[x]] === undefined) {
      obj[array[x]] = 1;
    } else {
      return array[x]
    }

  }

  return -1;

}

const arr = [2, 1, 5, 2, 3, 3, 4];

console.log(firstDuplicateValue(arr));

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
