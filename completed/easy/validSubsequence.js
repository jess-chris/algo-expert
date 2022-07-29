function isValidSubsequence(array, sequence) {
  
  let indexArr = Array.of(sequence.length)
  indexArr[0] = array.indexOf(sequence[0]);
  if (indexArr[0] < 0) return false;
  let x = 1;

  while (x < sequence.length) {

    let numIndex = array.indexOf(sequence[x], indexArr[x - 1] + 1);

    if (numIndex < 0) return false;

    if (indexArr.every(ele => numIndex > ele) ) {
      indexArr[x] = numIndex;
    } else {
      return false;
    }

    x++;

  }

  return true;
}

let arr1 = [1, 1, 1, 1, 1];
let seq1 = [1, 1, 1];

console.log(isValidSubsequence(arr1, seq1));

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
