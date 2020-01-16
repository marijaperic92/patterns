var path = require('path');
var { appendFile } = require('fs');
var morese = require('morse');

class LogStategy {

    //npm install morse
    static toMorseCode(timestamp, message) {
        var morseCode = morse.encode(message);
        console.log(morseCode);
    }

    static noDate(timestamp, message) {
        console.log(message);

    }

    static toFile() {
        var fileName = path.join(__dirname, 'logs.txt');
        appendFile(fileName, `${timestamp} - ${message} \n`, error => {
            if(error){
                console.log('Error writing to file')
                console.error(error)
            }
        })
    }

    static toConsole() {
        console.log(`${timestamp} - ${message}`)
    }

    static none() {

    }
}

module.exports = LogStategy