function runLengthEncoding(string, encoded = "") {

  if (string.length === 0) return encoded;

  let count = 1;
  let char = string[0];

  while (string[count] === char) {
    count++;
  }

  if (count > 9) {

    tmp = count;

    while (tmp > 9) {
      encoded += `9${char}`;
      tmp -= 9;
    }
    encoded += `${tmp}${char}`;
  } else {
    encoded += `${count}${char}`;
  }


  return runLengthEncoding(string.slice(count), encoded);

}

const str = "AAAAAAAAAAAAABBCCCCDD";

console.log(runLengthEncoding(str));

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
