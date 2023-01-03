function smallestDifference(arrayOne, arrayTwo) {

  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);

  let diff = [arrayOne[0], arrayTwo[0]];
  let indOne = 0;
  let indTwo = 0;

  while(indOne < arrayOne.length && indTwo < arrayTwo.length) {
    
    if (Math.abs(arrayOne[indOne] - arrayTwo[indTwo]) < Math.abs(diff[0] - diff[1])) {
      diff = [arrayOne[indOne], arrayTwo[indTwo]];
    }
    
    arrayOne[indOne] < arrayTwo[indTwo] ? indOne++ : indTwo++;

  }

  return diff;

}

const arr1 = [-1, 5, 10, 20, 28, 3];
const arr2 = [26, 134, 135, 15, 17];

console.log(smallestDifference(arr1, arr2));

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
