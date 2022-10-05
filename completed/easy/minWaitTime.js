function minimumWaitingTime(queries) {
  
  for (let x = queries.length - 1; x >= 0; x--) {
    
    if (queries[x] < queries[x - 1]) {
      [queries[x], queries[x - 1]] = [queries[x - 1], queries[x]];
      x = queries.length;
    }
  }
  
  let waitTime = 0;
  let currentDuration = queries[0];

  for (let x = 1; x < queries.length; x++) {

    waitTime += currentDuration;
    currentDuration += queries[x];

  }

return waitTime;

}


// const data = [6, 3, 2, 2, 1]; // 17

const data = [17, 4, 3]; 

console.log(minimumWaitingTime(data));

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;