// specify the kinds of objects to create using prototypical instance
// and create new objects by copying this prototype

var Traveller = require('./Traveller')

var standard =  new Traveller();
standard.addItemToList('museums');
standard.addItemToList('parks');
standard.addItemToList('center');
standard.addItemToList('galleries');

module.exports = standard;


