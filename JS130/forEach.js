
/*
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

/* filter

function filter(arr, callback) {
  let counter = 0;
  const returnArr = []
  for(let i= 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      returnArr[counter] = arr[i]
      counter++
    }
  }
  return returnArr
}


let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
*/

/*
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


function map(arr, callback) {
  const mappedValues = []
  const copyArr = arr.slice()
  for(let i = 0; i < copyArr.length; i++) {
    mappedValues.push(callback(copyArr[i]))
  }
  return mappedValues;
}
*/
/*
const peopleArr  = [
  {
      username:    'glestrade',
      displayname: 'Inspector Lestrade',
      email:       'glestrade@met.police.uk',
      authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
      lastSeen:    '2019-05-13T11:07:22+00:00',
  },
  {
      username:    'mholmes',
      displayname: 'Mycroft Holmes',
      email:       'mholmes@gov.uk',
      authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
      lastSeen:    '2019-05-10T11:21:36+00:00',
  },
  {
      username:    'iadler',
      displayname: 'Irene Adler',
      email:       null,
      authHash:    '319d55944f13760af0a07bf24bd1de28',
      lastSeen:    '2019-05-17T11:12:12+00:00',
  },
];
let counter = 0;

const peopleObj = peopleArr.reduce((acc, item) => {

  return acc['lmao'] = item
}, {})

console.log(peopleObj)
*/
/*

const arrOfStrings = ['hello', 'hi', 'world', 'hh'].reduce((acc, ele) => {
  if(ele[0] == 'h') {
    return acc.concat(ele)
  }
  else {
    return acc;
  }
},[])

console.log(arrOfStrings)
*/

const arr = [[1], [2], [3], [4]].reduce((acc, ele) => {
  return [acc.concat(...ele).reduce((acc, ele) => acc + ele)]
}, [])


console.log(arr)