/*
function later(func, arg) {
  return function() {
    func(arg)
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

function later2(func, arg) {
  return function(secondArg) {
    arg = 7
    return func(arg, secondArg)
  }
}

/*
The new function should call the input function with the argument provided to later2 and the argument provided to the returned function. For example:


const later = later2((arg, secondArg) => {return (arg + secondArg)}, 3)

console.log(later(10))


function makeCounterLogger(start) {
  return function(end) {
    if(start > end) {
      for(let i = start; i >= end; i--) {
        console.log(i)
      }
    }
    else {
      for(let i = start; i <= end; i++) {
        console.log(i)
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);

> let list = makeList();
> list();
The list is empty.

> list("make breakfast");
make breakfast added!

> list("read book");
read book added!

  return function(item = null) {
    let incrementer = 0;

    if(!item) {
      return list.length ? list : 'this list is empty'
    }

    while(incrementer < list.length) {
      if(list[incrementer] === item) {
        list = list.filter(note => note !== item)
        return `${item} removed`
      }
      incrementer++
    }

    list.push(item)
    return `${item} added`
  }

> list();
make breakfast
read book

> list("make breakfast");
make breakfast removed!

> let list = makeList();
> list.add("peas");
peas added!

> list.list();
peas

> list.add("corn");
corn added!

> list.list();
peas
corn

> list.remove("peas");
peas removed!

> list.list();
corn
*/

/*
function makeList() {
  let list = []
  return {
    add(item) {
      list.push(item)
      return item;
    },
    list() {
      console.log(list)
    },
    remove(item) {
      list = list.filter(note => note !== item)
      return item;
    }
  }
}

let list = makeList()
list.add('food')
list.add('food1')
list.add('food2')
list.list()
list.remove('food')
list.list()


function log(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3)
}

const arr = [1,2]

log(...arr, 3)
arguments 

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(...array);

Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.


function myBind(func, context) {
  return function(...args) {
    func.call(context, ...args)
  }
}

const obj = {
  words: 'hello'
}

function hello(str, str2, str3) {
  console.log(this.words, str, str2, str3)
}

let boundFunc = myBind(hello, obj)

boundFunc('hi', 'hello', 'dddd') 

function log(...args) {
  console.log(...args)
}

log('hhrher', 'efef')


function myBind(context) {
  return function(func) {
   return function(...args) {
     func.call(context, ...args)
   }
  }
}

const obj = {
  words: 'hello'
}

function hello(str, str2, str3) {
  console.log(this.words, str, str2, str3)
}

let boundFunc = myBind(obj)
let passedFunc = boundFunc(hello)
passedFunc('hi', 'hello', 'dddd')

Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack. push takes a value and appends it to the stack. pop removes and returns the last element from the stack. printStack logs each remaining element of the stack on its own line, starting with the item that was last recently added to the stack and ending with the most recently added item.

Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.


function newStack() {
  const stack = []
  return {
    push(item) {
      if(stack.length === 5) {
        stack.shift()
      }
      let pushed = stack.push(item)
      return pushed
    },
    pop(item) {
      let popped = stack.pop(item)
      return popped
    },
    printStack() {
      console.log(stack.reverse())
    }
  }
}

let stack = newStack()
stack.push('wewe1')
stack.push('wewe2')
stack.push('wewe3')
stack.push('wewe4')
stack.push('wewe5')
stack.push('wewe6')
stack.printStack()

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  name: 'yolo',
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'

function delegate(obj, method, ...args) {
  return function() {
    /*
  function(greeting) {
      console.log(greeting + ' ' + this.name);
    }
    
    function bob() {
      console.log(this)
    }
    bob()
    obj[method](...args)
    console.log(this)
  }
}
*/
/*

const Account = {
  init(email, password, firstName, lastName, displayName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
    return this;
  }
}


function sum(...args) {
  const values = args;

  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];
const [james, tiberius, kirk] = fullName

console.log(formatName(james, tiberius, kirk));
// logs: Kirk, James T.
*/





