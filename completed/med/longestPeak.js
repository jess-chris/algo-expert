function longestPeak(array) {


  function findLength(arr) {

    if (arr.length < 3) return false;

    let newPeak = [arr[0]];
    let max;

    for (let x = 1; x < arr.length; x++) {

      if (arr[x] > newPeak[newPeak.length - 1] && !max) newPeak.push(arr[x]);

      else if (arr[x] < newPeak[newPeak.length - 1]) {

        if (!max) max = newPeak[newPeak.length - 1];
        newPeak.push(arr[x]);

        if (x === arr.length - 1 && max !== newPeak[0]) return newPeak;

      } else {

        if (newPeak.length >= 3 && max !== newPeak[0] && max !== undefined) return newPeak;
        else return false;

      }

    }

    return false;

  }


  let longest = 0;

  for (let x = 0; x < array.length - 2; x++) {

    const currentPeak = findLength(array.slice(x));

    if (currentPeak) {

      if (currentPeak.length >= array.length) return currentPeak.length;
      
      if (currentPeak.length > longest) longest = currentPeak.length;

    }


  }

  return longest;

}


const arr = [1, 2, 3, 3, 2, 1]

console.log(longestPeak(arr));

// Do not edit the line below.
exports.longestPeak = longestPeak;
