function generateDocument(characters, document) {

  if (characters.length < document.length) return false;

  const maxLen = Math.max(characters.length, document.length);
  const obj = {};

  for (let x = 0; x < maxLen; x++) {

    let char = characters[x];
    let doc = document[x];

    if (doc !== undefined) {
      obj[doc] === undefined ? obj[doc] = 1 : obj[doc]++;
    }
    
    if (char !== undefined) {
      obj[char] === undefined ? obj[char] = -1 : obj[char]--;
    }


  }

  const arr = Object.values(obj).filter(el => el > 0);

  if (arr.length === 0) return true;
  else return false;

}

console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"));

// Do not edit the line below.
exports.generateDocument = generateDocument;
