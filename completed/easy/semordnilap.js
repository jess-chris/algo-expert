function semordnilap(words) {

  const pairs = [];
  const obj = {};

  for (let x = 0; x < words.length; x++) {

    let cur = words[x];
    let rev = cur.split('').reverse().join('');

    obj[cur] === undefined ? obj[cur] = 1 : obj[cur]++;

    if (cur !== rev) {
      obj[rev] === undefined ? obj[rev] = 1 : obj[rev]++;
    }

  }

  const arr = Object.keys(obj).filter(el => obj[el] === 2);

  for (let x = 0; x < arr.length; x += 2) {
    pairs.push([arr[x], arr[x+1]]);
  }

  return pairs;
}

console.log(semordnilap(["liver", "dog", "hello", "desserts", "evil", "test", "god", "stressed", "racecar", "palindromes", "semordnilap", "abcd", "live"]))

// Do not edit the line below.
exports.semordnilap = semordnilap;
