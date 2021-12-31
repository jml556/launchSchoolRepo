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
*/
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(...array);