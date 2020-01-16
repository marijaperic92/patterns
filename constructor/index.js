/*
This is a class-based creational design pattern.
Constructors are special functions that can be used to instantiate 
new objects with methods and properties defined by that function.
*/

class SuperTraveller {
    constructor(name, specialAbility) {
      this._name = name;
      this._specialAbility = specialAbility;
  
      this.getDetails = function() {
        return `${this._name} can ${this._specialAbility}`;
      };
    }
  }
  
  const jelena = new SuperTraveller('Jelena Simic', 'visit as many countries as possible in short period of time');
  
  console.log(jelena.getDetails());