function caesarCipherEncryptor(string, key) {

  const min = 97;
  const max = 122;

  key = key % 26;

  const cipher = string.split("").map(x => {

    const char = x.charCodeAt(0);
    let res = char + key;

    if (res > max) res = ((res % 122) + min) - 1;

    return String.fromCharCode(res);

  });

  return cipher.join('');

}

const str = "xyz";
const key = 2;

console.log(caesarCipherEncryptor(str, key))

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
