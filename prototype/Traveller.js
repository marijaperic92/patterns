class Traveller {
    constructor(name='unnamed person') {
        this._name = name;
        this._visitList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }
    
    get visitList() {
        return this._visitList.join(', ');
    }

    addItemToList(item) {
        this._visitList.push(item);
    }

    clone() {
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._visitList = [...this._visitList]
        
        return cloned;
    }
}

module.exports = Traveller;