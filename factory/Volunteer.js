class Volunteer {
    constructor() {
      this.type = 'volunteer';
      this.purpose = function() {
        return 'You will have opportunity to help people in undeveloped countries.';
      };
    }
}

module.exports = Volunteer;