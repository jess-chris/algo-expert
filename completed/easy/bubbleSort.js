function bubbleSort(array) {
  
  let x = 0;
  let swap = false;

  while(x < array.length) {

    if (array[x] > array[x+1]) {
      [array[x], array[x+1]] = [array[x+1], array[x]];
      swap = true;
    }

    x++;

    if ((x === array.length - 1) && swap) {
      x = 0;
      swap = false;
    }

  }

  return array;

}

const arr = [8, 5, 2, 9, 5, 6, 3];

console.log(bubbleSort(arr))

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
