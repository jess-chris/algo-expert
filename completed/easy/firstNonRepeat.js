function firstNonRepeatingCharacter(string) {

  const obj = {};

  for (let x = 0; x < string.length; x++) {

    obj[string[x]] === undefined ? obj[string[x]] = x : obj[string[x]] = -1;

  }

  const values = Object.values(obj).filter(el => el >= 0).sort((a,b) => a - b);

  if (values.length !== 0) return values[0];

  return -1;
}


console.log(firstNonRepeatingCharacter("faadabcbbebdf"))

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
