var standard = require ('./standard');

var alex = standard.clone();
alex.name = 'Alex Banks'
alex.addItemToList('nightlife');

var eve = standard.clone();
eve.name = 'Eve Bronks'
eve.addItemToList('libraries');

console.log(`${alex.name}: ${alex.visitList}`);
console.log(`${eve.name}: ${eve.visitList}`);