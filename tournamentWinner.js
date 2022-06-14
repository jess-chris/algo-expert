function tournamentWinner(competitions, results) {
  
  const res = {}; 
  

  for (let x = 0; x < results.length; x++) {

    if (!res[competitions[x][0]]) res[competitions[x][0]] = 0
    if (!res[competitions[x][1]]) res[competitions[x][1]] = 0

    results[x] === 1 ? res[competitions[x][0]] += 3 : res[competitions[x][1]] += 3;
    
  }

  return Object.entries(res).sort((a,b) => b[1] - a[1])[0][0];

}


let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]

let results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
