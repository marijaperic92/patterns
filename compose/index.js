/*
The easiest way to think about this is with the example of a multi-level menu. 
Each node can be a distinct option, or it can be a menu itself, which has multiple options as its child.
A node component with children is a composite component, 
while a node component without any child is a leaf component.
*/
var TravelPerson = require('./TravelPerson');
var TravelGroup =  require('./TravelGroup')

var alex = new TravelPerson("Alex Brown" , 79.99);
var eva = new TravelPerson("Eva Mense" , 59.99);
var dave = new TravelPerson("Dave Horgvart" , 79.99);

var group_tara = new TravelGroup("Tara", [alex, eva, dave]);

var group_zlatar = new TravelGroup("Zlatar", 
    [
        new TravelPerson("Mila Petrovski", 89.99),
        new TravelPerson("Milan Petrovic", 79.99)
    ]
);

group_tara.print();
console.log('tara total: ', `$${group_tara.getTotal()}`)

group_zlatar.print();
console.log('zlatar total: ',`$${group_zlatar.getTotal()}`);