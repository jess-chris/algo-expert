function findThreeLargestNumbers(array) {

  const data = [array[0], -Infinity, -Infinity]

  for (let x = 1; x < array.length; x++) {

    if (array[x] > data[0]) {

      data[2] = data[1];
      data[1] = data[0]
      data[0] = array[x];
    
    } else if (array[x] > data[1]) {

      data[2] = data[1];
      data[1] = array[x];

    } else if (array[x] > data[2]) data[2] = array[x];

  }

  return data.reverse();
}

const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

console.log(findThreeLargestNumbers(arr))

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
