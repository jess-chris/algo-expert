function insertionSort(array) {

  for (let x = 0; x < array.length; x++) {

    if (array[x] > array[x+1]) [array[x], array[x+1]] = [array[x+1], array[x]];

    let re = x - 1;

    while(array[re] < array[re-1] && re >= 0) {

      [array[re], array[re-1]] = [array[re-1], array[re]];
      re--;

    }

  }

  return array;

}

const arr = [8, 5, 2, 9, 5, 6, 3]

console.log(insertionSort(arr))

// Do not edit the line below.
exports.insertionSort = insertionSort;
