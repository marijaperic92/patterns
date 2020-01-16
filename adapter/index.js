// convert the interface of a class into another clients expects.
//adapter lets classes work together that couldn't otherwise because of incompatible interfaces

var localStorage = require('./LocalStorage');

console.log("localStorage length: ", localStorage.length);

var uid = localStorage.getItem("user_id");

if(!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "weufweweiwfw24355DFTDCVGUJI");
    localStorage.setItem("user_id", "123344");
} else {
    console.log('User ID  ' , uid);
    console.log('Clearing the user id');
    localStorage.clear();
}
