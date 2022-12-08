function classPhotos(redShirtHeights, blueShirtHeights) {

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const arrSize = redShirtHeights.length;

  if (blueShirtHeights[arrSize - 1] > redShirtHeights[arrSize - 1]) {
    return redShirtHeights.every((el, i) => el < blueShirtHeights[i]);
  } else {
    return blueShirtHeights.every((el, i) => el < redShirtHeights[i]);
  }

}

const redShirtHeights = [19, 19, 21, 1, 1, 1, 1, 1]
const blueShirtHeights = [20, 5, 4, 4, 4, 4, 4, 4]

console.log(classPhotos(redShirtHeights, blueShirtHeights));


// Do not edit the line below.
exports.classPhotos = classPhotos;
