function nonConstructibleChange(coins) {
  // Write your code here.

  if(!coins.length) return 1;

  let count = 1;

  coins.sort((a, b) => a - b)

  while(true) {

    let sum = count;
    let used = [];


    if (!coins.includes(count)) {

      for (let x = coins.length - 1; x > -1; x--) {

        console.log(sum)

        if (sum - coins[x] >= 0 && !used.includes(x)) {
          sum -= coins[x];
          used.push(x);
          x = coins.length - 1;
        }


        if (sum === 0) break;

      }
    } else {
      sum = 0;
    }
    
    if (sum >= 1) return count;

    count++;
    used = [];

  }

}


let coins = [5, 7, 1, 1, 2, 3, 22]


console.log(nonConstructibleChange(coins))


// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
