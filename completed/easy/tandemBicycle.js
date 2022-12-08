function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {

  let total = 0;

  if (fastest) {

    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);

  } else {

    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

  }

  for (let x = 0; x < redShirtSpeeds.length; x++) {

    let red = redShirtSpeeds[x];
    let blue = blueShirtSpeeds[x];

    red <= blue ? total += blue : total += red;

  }

  return total;

}

const redShirtSpeeds = [1, 2, 1, 9, 12, 3]
const blueShirtSpeeds = [3, 3, 4, 6, 1, 2]

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, false))

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
