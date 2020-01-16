var Logger = require('./Logger');

// usage
const log1 = new Logger();
log1.log("first instance of logger");
log1.log("first instance of logger 2");

const log2 = new Logger();
log2.log("second instance of logger");
log2.log("second instance of logger 2");

console.log(`${log1.count} logs total`);
console.log(`${log2.count} logs total`);