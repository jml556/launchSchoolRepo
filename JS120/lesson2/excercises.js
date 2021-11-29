/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`hi my name is ${this.name}`)
  }
}

const kitty = new Cat('bob')

kitty.greet()
*/
/*
class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe
*/
/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
*/
/*
class Cat {
  static genericGreeting() {
    console.log('Hello I am a cat')
  }
}

Cat.genericGreeting();
*/

/*
class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log('hello I am a cat')
  }

  personalGreeting() {
    console.log('hello from ' + this.name)
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();
*/

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount
  },
};

item.discount(20)   // should return 40
40
console.log(item.discount(50))   // should return 25
20
console.log(item.discount(25))   // should return 37.5
15