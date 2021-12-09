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

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Truck {
  constructor() {
    Object.assign(this, towMixin);
  }
}

class Car {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);