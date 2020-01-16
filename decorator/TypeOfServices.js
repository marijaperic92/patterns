class PackedItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${item.name} costs ${item.price}`);
    }

}

class WrappedItem {

    constructor(baseItem) {
        this.name = `Wrap ${baseItem.name}`;
        this.price = 10 + baseItem.price;
    }

}

class ProtectedItem {

    constructor(baseItem) {
        this.name = `Protected ${baseItem.name}`;
        this.price = 5 + baseItem.price;
    }
    
}

module.exports = {PackedItem, WrappedItem, ProtectedItem}