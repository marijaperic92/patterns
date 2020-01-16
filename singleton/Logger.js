/* 
Singleton is a special creational design pattern in which only one instance of a class can exist.
If no instance of the singleton class exists then a new instance is created and returned,
but if an instance already exists, then the reference to the existing instance is returned
*/

class Logger {
    constructor() {
        if(Logger.exists){
            return Logger.instance;
        }
        this.logs = [];
        Logger.instance = this;
        Logger.exists = true;
        return this;
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}

module.exports = Logger;