//attach additional responsibilities to an object dynamically
//focuses on the ability to add behaviour or functionalities to existing classes dynamically
//decorators provide a flexible alternative to subclassing for extending functionality

var Traveller = require('./Traveller');
var {
    PackedItem, 
    WrappedItem,
    ProtectedItem
} = require('./TypeOfServices');

var alex =  new Traveller('Alex', 1000);

var book  = new PackedItem("book", 2.99);
var cups  = new PackedItem("cups", 2.99);
var protected_cups =  new ProtectedItem(cups);


alex.purchase(book);
alex.purchase(protected_cups);

alex.printStatus();