/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year)
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year)
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015
*/

/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }
  logYear() {
    console.log('hi')
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year)
    console.log(super(year))
    super.logYear()
    
    this.startEngine()
  }
  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);
*/

/*

class Vehicle {
  constructor(year) {
    this.year = year;
  }
  logWheel() {
    console.log(this.year)
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year)
    this.bedType = bedType
  }
}

class Car extends Vehicle {
  constructor(wheels) {
    super(wheels)
  }
}

const car = new Car(120)

car.logWheel()
*/

/*
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle{
  constructor(speed) {
    super()
    this.speed = speed;
  }
  startEngine() {
   return(super.startEngine() + '' + this.speed)
  }
}

let truck1 = new Truck('fast');
console.log(truck1.startEngine('fast'));

let truck2 = new Truck('fast');
console.log(truck2.startEngine('slow'));
*/
//mixins

/*
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
const walkMixin = {walk() {return `lets go for a walk`}}
Object.assign(Cat.prototype, walkMixin)

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());
*/

/*
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Fish.prototype, swimMixin)
Object.assign(Dog.prototype, swimMixin)

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());
*/

/*
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
    Object.assign(this, swimMixin);
  }
}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

console.log(fish1.hasOwnProperty('swim'))
*/

/*
function objectsEqual(obj1, obj2) {
  for(let key in obj1) {
    if(!Object.keys(obj2).includes(key)) return false;
    if(obj1[key] !== obj2[key]) return false
  }
  return true
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
*/

/*
function createStudent(name, grade) {
  return {
    name,
    grade,
    courses: [],
    notes: [],
    
    info() {
      console.log(this.name, this.grade)
    },

    addCourse(course) {
      this.courses.push(course)
    },

    listCourses() {
      console.log(this.courses)
    },

    addNote(code, note) {
      let push = false
      for(let i = 0; i < this.notes.length; i++) {
        if(Object.keys(this.notes[i])[0] === code) {
          this.notes[i] = {[code]: note}
          push = true;
        }
      }
      if(!push) {
        this.notes.push({[code]: note})
      }
    },

    updateNote(code, note) {
      this.notes.forEach((item, idx, arr) => {
        if(Object.keys(item)[0] === code) {
          arr[idx] = {[code]: note}
        }
      })
    },

    viewNotes() {
      console.log(this.notes)
    }
  }
}


 let foo = createStudent('Foo', '1st');
 foo.info();
 foo.listCourses();
 foo.addCourse({ name: 'Math', code: 101 });
 foo.addCourse({ name: 'Advanced Math', code: 102 });
 foo.listCourses();
 foo.addNote(101, 'Fun course');
 foo.addNote(101, 'Remember to study for algebra');
 foo.viewNotes();
 foo.addNote(102, 'Difficult subject');
 foo.viewNotes();
 foo.updateNote(101, 'Fun course');
 foo.viewNotes();
 */

/*
const school = {
  students: [],
  addStudent(name, year) {
    const yearArr = ["1st", "2nd", "3rd", "4th", "5th"];
    if (yearArr.includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log("invalid year");
    }
  },

  enrollStudent(studentname, course) {
    this.students.forEach((item) => {
      if (item.name === studentname) {
        item.addCourse(course)
        item.listCourses();
      }
    });
  },

  addGrade(studentname, course, grade) {
    this.students.forEach((item) => {
      if (item.name === studentname) {
        item.courses.forEach(item => {
          if(item.name === course) {
            item['grade'] = grade;
          }
        })
      }
    });
  },

  getReportCard(studentname) {
    this.students.forEach((item, idx, arr) => {
      if(item.name === studentname) {
        item.courses.forEach(item => {
          if(item.grade != undefined) {
            console.log(item.name, item.grade)
          }
          else {
            console.log('In Progress')
          }
        })
      }

    })
  }
};

school.addStudent("bob", "1st");
school.enrollStudent("bob", { name: "Math", code: "101" });
school.enrollStudent("bob", { name: "History", code: "101" });
school.enrollStudent("bob", { name: "English", code: "104" });
school.addGrade('bob', 'Math', 101)
school.addGrade('bob', 'English', 110)
school.getReportCard('bob')

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function () {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function () {
      return this.courses;
    },

    addCourse: function (course) {
      this.courses.push(course);
    },

    addNote: function (courseCode, note) {
      let course = this.courses.filter((course) => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },

    viewNotes: function () {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function (courseCode, note) {
      let course = this.courses.filter((course) => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}
*/

/*
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
*/

/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype)
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.
*/
/*
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age)
    this.color = color;
  }
  info() {
    return (this.name + this.age + this.color)
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());
/*
My cat Pudding is 7 years old and has black and white fur.
My cat Butterscotch is 10 years old and has tan and white fur.

*/

/*
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status)
  }
  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status)
      this.master = master;
  }
  greetMaster() {
    console.log(`Hello ${this.master}! Woof, woof!`)
  }
}

const bob = new Dog('bob', 5, 'hasdappy', 'steve')

bob.greetMaster()
console.log(bob.introduce())
*/

/*
class Car {
  constructor(make, model, wheel) {
    this.make = make;
    this.model = model;
    this.wheel = wheel
  }

  getWheels() {
    return this.wheel;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Motorcycle extends Car{}

class Truck extends Car {
  constructor(make, model, payload) {
    super(make, model, 6)
    this.payload = payload;
  }
}

const moto = new Motorcycle('honda', 'brz', 2)
*/

/*
class Person {
  greeting(text) {
    console.log(text)
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase())
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
*/
/*
const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Person.prototype, walkMixin)
Object.assign(Cheetah.prototype, walkMixin)
Object.assign(Cat.prototype, walkMixin)

console.log(Person.prototype)


let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"
*/
/*
class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.num = 0;
  }

  numberOfPets() {
    return this.num
  }

  sayHi() {
    console.log('hi')
  }
}

class Shelter {
  constructor() {
    this.adoptions = []
  }
  adopt(owner, pet) {
    owner.num++
    this.adoptions.push(pet)
  }

  printAdoptions() {
    console.log(this.adoptions)
  }
}

let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();


console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/
/*
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {}

  emptyLine() {}

  messageLine() {
    return `| ${this.message} |`
  }
}

/*
let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
+--+
|  |
|  |
|  |
+--+
*/
/*
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};
*/
/*
function myFilter(array, func, context) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(context, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]
*/

/*
const towMixin = {
  tow() {
    console.log(`I can tow a trailer!`)
  }
}

class Truck {}

class Car {}
Object.assign(Truck.prototype, towMixin)


let truck = new Truck();
truck.tow();
*/
/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Truck extends Vehicle{
  constructor(year) {
    super(year)
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle{}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
*/

// name property added to make objects easier to identify
/*
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  const arr = [];
  arr.push(Object.getPrototypeOf(this))
  while(true) {
    if(Object.getPrototypeOf(arr[arr.length - 1]) === null) break;
    arr.push(Object.getPrototypeOf(arr[arr.length - 1]))
  }
    console.log(arr)
}


qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
*/

/*
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;

  this.fullName = function() {
    console.log(`${this.firstName + this.lastName}`)
  }

  this.communicate = function() {
    console.log('communicate')
  }

  this.eat = function() {
    console.log('eat')
  }

  this.sleep = function() {
    console.log('sleep')
  }
}



let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
*/

let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }
}

class Row {
  constructor() {
    // We need some way to identify a row of 3 squares
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display(); // so we can see human's move
      if (this.gameOver()) break;

      this.computerMoves();
      this.board.display(); // so we can see the computer's move
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    // show the results of this game (win, lose, tie)
  }

  humanMoves() {
    let choice;

    while (true) {
      choice = readline.question("Choose a square between 1 and 9: ");

      let integerValue = parseInt(choice, 10);
      if (integerValue >= 1 && integerValue <= 9) {
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = Math.floor((9 * Math.random()) + 1);
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();