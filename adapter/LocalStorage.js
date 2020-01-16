var {writeFile, existsSync, readFileSync, unlink} = require('fs');

class LocalStorage {

    constructor() {

        if(existsSync('localstorage.json')) {
            console.log('Loading items from localStorage.json');
            var txt = readFileSync('localstorage.json');
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }
    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile('localstorage.json', JSON.stringify(this.items), error => {
            if(error) {
                console.error(error);
            }
        })
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('Localstorage file removed')
        })
    }
}

module.exports = new LocalStorage();