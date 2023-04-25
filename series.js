let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

seriesPending.push('String Things');
seriesPending.push('The Matrix');
 
for (let i = 0; i < seriesPending.length; i++) {
  console.log(`Serie #${i}: ${seriesPending[i]}`);
 
  if (seriesPending[i] === 'Boolean 99') {
    console.log('Found it!');
  }
}
 
let seriesWatching = [];
 
seriesWatching.push(seriesPending.shift());
 
for (let i = 0; i < 4; i++) {
  seriesWatching.push(seriesPending.shift());
}
 
seriesWatching.splice(0, seriesWatching.length);
 
console.log(`seriesPending: ${seriesPending.length},   seriesWatching: ${seriesWatching.length}.`);