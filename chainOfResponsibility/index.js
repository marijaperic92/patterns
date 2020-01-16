// avoid coupling the sender of a request to its receiver by giving more than one object to handle the request
// Chain the receiving objects and pass the request along the chain 
var Store = require('./Store');
var inventory =  require('./inventory');

var webshop = new Store('Webshop', inventory);

var searchItem = 'MEDIAPAD M5 LITE 10';
var results = webshop.find(searchItem);

console.log(results);