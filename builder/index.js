//contractor - customization how many bedrooms, baths
//customize instances of the objects
//separate the construction of a complex object from its representation 
//so that the same construction process can create different representations
var PersonBuilder = require('./PersonBuilder');

var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();
var charles = new PersonBuilder('Charles').withMoney(500).withList(['jeans', 'sunglasses']).build();
var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(charles.toString())
console.log(sue.toString())