var travelFactory = require('./travelFactory')

var adventure = travelFactory('adventure');
var volunteer  = travelFactory('volunteer');

console.log(adventure.purpose());
console.log(volunteer.purpose());``