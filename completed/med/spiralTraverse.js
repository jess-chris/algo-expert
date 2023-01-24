function traverseDirection(array, dir) {

  let tmp = [];

  if (dir === "right") return array.shift();
  
  else if (dir === "down") {

    for (let x = 0; x < array.length - 1; x++) {

      tmp.push(array[x].pop());

    }

    return tmp;
  }

  else if (dir === "left") {
    return array.pop().reverse();
  }

  else if (dir === "up") {

    for (let x = array.length - 1; x >= 0; x--) {

      tmp.push(array[x].shift());

    }

    return tmp
  }
}


function spiralTraverse(array) {

  const newArr = [];
  const directions = ["right", "down", "left", "up"];

  while (array.length > 0) {

    for (let x = 0; x < directions.length; x++) {

      let res = traverseDirection(array, directions[x]);

      if (res.includes(undefined)) return newArr;

      newArr.push(...res);

      if (array.length <= 0) return newArr;

    }

  }

  return newArr;

}


const arr = [
  [1],
  [3],
  [2],
  [5],
  [4],
  [7],
  [6]
]

console.log(spiralTraverse(arr))

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
