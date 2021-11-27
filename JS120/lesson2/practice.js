/*
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
*/
/*
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

fooB.baz = 2

function getProto(object, prop, val) {
  try {
    let currentProto = Object.getPrototypeOf(object)
    console.log(currentProto)
    while(true) {
    
    if(currentProto && Object.keys(currentProto).includes(prop)) {
      currentProto[prop] = val
      break;
    }
    else if(!Object.getPrototypeOf(object)) {
      break;
    }
    else {
      currentProto = Object.getPrototypeOf(currentProto)
    }
  }
  } catch(e) {
    console.error(e)
  }
}

getProto(fooC, "baz", 3);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2
console.log(fooB); // 2
*/

/*
const arr = [1,2,3,4,5,6]

arr.forEach(function bop(item){
  console.log(item)
})
*/
/*

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo))
/*
Take a look at the following code snippet. Use call to invoke the add method but with foo as execution context. What will this return?

*/
/*
let invoice = {
  phone: 3000,
  internet: 6500
};

let payment = {
  phone: 1300,
  internet: 5500
};

let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700
*/
/*
function createInvoice(services = {}) {
  return {
    phone: services.phone ? services.phone : 3000,
    internet: services.internet ? services.internet : 5500,
    total() {
      return this.internet + this.phone
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

*/
/*
function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000
*/
/*
function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'

let bob = function() {
  console.log('hi')
}

bob.constructor = bob

console.log(bob.constructor)
*/
/*
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);
*/

/*
function Circle(radius) {
  this.radius = radius
}

Circle.prototype.area = function() {
  let radius = this.radius;
  return (Math.PI * (radius**2))
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)) // => 28.27
console.log(b.area().toFixed(2)) // => 50.27
console.log(a.hasOwnProperty('area')) // => false
*/
/*
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja, Ninja.prototype.swingSword());
*/

/*
function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}
// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`
*/

/*
let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

console.log(ninjaA)

// create a `ninjaB` object here; don't change anything else
const ninjaB = new ninjaA.constructor

console.log(ninjaB)

ninjaA.constructor === ninjaB.constructor // => true
*/

/*
function User(first, last) {
  if(!(this instanceof User)) {
    return new User(first, last)
  }
  this.name = first + ' ' + last
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
*/