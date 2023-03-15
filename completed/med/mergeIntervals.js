function mergeOverlappingIntervals(array) {
  const intervals = [];
  const sortedCopy = array.map(x => x).sort((a, b) => a[0] - b[0]);

  let currentInterval = null;
  
  sortedCopy.forEach((subArr, i) => {

    const [start, end] = [...subArr];

    if (!currentInterval) {
      currentInterval = [start, end];
    } else if (start <= currentInterval[1] && end >= currentInterval[1]) {
      currentInterval[1] = end;
    } else if (start >= currentInterval[1]) {
      intervals.push(currentInterval);
      currentInterval = [start, end];
    }

    if (i === sortedCopy.length - 1) intervals.push(currentInterval);

  });

  return intervals

}

const arr = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10]
  // [43, 49],
  // [9, 12],
  // [12, 54],
  // [45, 90],
  // [91, 93]
];

console.log(mergeOverlappingIntervals(arr));


// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
