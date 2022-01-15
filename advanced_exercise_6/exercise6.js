//Evaluate these:
//#1
[2] === [2] 
// {} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(age, name, color) {
    this.age = age;
    this.name = name;
    this.color = color;
  }

  move() {
    console.log(`Animal ${this.name} moved!`);
  }
};

class Mamal extends Animal {
  constructor(age, name, color, gender) {
    super(age, name, color);
    
    this.gender = gender;
  }

  findMate() {
    console.log(`${this.name} is trying to find a mate`);
  }

  mate() {
    console.log(`${this.name} had a good time with it's mate`);
  }
};

class Cow extends Mamal {
  constructor(age, name, color, gender, type) {
    super(age, name, color, gender);

    this.type = type;
  }

  moo() {
    console.log(`Moo! name: ${this.name}, type: ${this.type}, color: ${this.color}`);
  }
};

const cow = new Cow(12, "Pambudi", "Black white", "Male", "Wagyu");
console.log(cow);
cow.move();
cow.findMate();
cow.mate();
cow.moo();
// const cow = new Mamal(12, "Pambudi", "Black white", "Male", "Wagyu");
