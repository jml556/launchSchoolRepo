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
