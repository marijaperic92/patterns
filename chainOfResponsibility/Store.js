var Storage = require('./Storage');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        
        var devices = new Storage('devices', inventory.devices);
        var tablets = new Storage('tablets', inventory.tablets);
        var modems = new Storage('modems', inventory.modems, 1);

        devices.setNext(tablets);
        tablets.setNext(modems);
        
        this.storage = devices;
    }

    find(itemName) {
       return this.storage.find(itemName);
    }
}

module.exports = Store