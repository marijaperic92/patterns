class TravelGroup {

    constructor (name, composites=[]) {
        this.name = name;
        this.composites = composites;
    }

    getTotal() {
        return this.composites.reduce((total, nextItem) => total+nextItem.total ,0);
    }

    print () {
        console.log(`\n${this.name.toUpperCase()}`);
        this.composites.forEach(item => item.print());
    }

}

module.exports = TravelGroup