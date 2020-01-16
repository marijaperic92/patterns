//maps, graphs, charts, photos - provide a way to access the elements of an aggregate object sequentially
//without exposing its underlying representation
class InventoryItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    writeLn() {
        process.stdout.write(`${this.name}: $${this.price}`);
    }
}

module.exports = InventoryItem;