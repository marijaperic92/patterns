class Adventure {
    constructor() {
      this.type = 'adventure';
      this.purpose = function() {
        return 'It will be unforgettable. You will enjoy it!';
      };
    }
}

module.exports = Adventure;