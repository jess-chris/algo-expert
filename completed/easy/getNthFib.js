function getNthFib(n) {
  // Write your code here.

  return [...Array(n).keys()].map((e, i, _) => i < 2 ? e : _[i] = _[i - 1] + _[i - 2])[n - 1]

}

console.log(getNthFib(6));

// Do not edit the line below.
exports.getNthFib = getNthFib;
