// define an interface for creating an object, but let subclasses decide which class to instantiate

var Adventure =  require('./Adventure');
var Volunteer =  require('./Volunteer');

var travelFactory = (type) => {
    if(type === 'adventure') {
        return new Adventure();
    } else if (type === 'volunteer')  {
        return new Volunteer();
    } else {
        return new WeekendBreak();
    }
}

module.exports = travelFactory;