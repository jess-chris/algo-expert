function arrayOfProducts(array) {
  
  const res = [];

  for (let x = 0; x < array.length; x++) {

    const product = array.reduce((acc, el, i) => i === x ? acc : acc *= el, 1);

    res.push(product);

  }

  return res;

}


const arr = [5, 1, 4, 2];

console.log(arrayOfProducts(arr))


// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
