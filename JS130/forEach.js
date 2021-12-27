//forEach(arr, value => console.log(value * value));
function forEach(arr, func, thisArg = null) {
  const newArr = arr.slice()
  for(let i = 0; i < arr.length; i++) {
    if(thisArg != null) {
      func.call(thisArg, arr[i], i, newArr)
    }
    else {
      func(arr[i], arr[i], i, newArr)
    }
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item, index, arr) {
    console.log(this.prefix, item, index, arr );
  }
}

let foo = new Foo("Item: ");
const arr = [1, 2, 3]

forEach(arr, foo.showItem, foo);

/*
forEach([4, 5, 6], foo.showItem, foo);
*/

