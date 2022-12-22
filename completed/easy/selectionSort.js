function selectionSort(array) {

  for (let x = 0; x < array.length - 1; x++) {

    let lowest = x;

    for (let y = x + 1; y < array.length; y++) {

      if (array[y] < array[lowest]) lowest = y;

    }

    [array[x], array[lowest]] = [array[lowest], array[x]];

  }

  return array;

}

const arr = [1, 3, 2];

console.log(selectionSort(arr));

// Do not edit the line below.
exports.selectionSort = selectionSort;
