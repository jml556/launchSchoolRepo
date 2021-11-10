const readline = require('readline-sync')
/*
function minilang(args) {

	const argArray = args.split(' ')
  const register = []
  const stack = []
  
  for(let i = 0; i < argArray.length; i++) {
    
    if(parseInt(argArray[i])) {
      register.push(parseInt(argArray[i]))
      console.log(parseInt(argArray[i]))
    }

    else if(argArray[i] === 'PUSH') {
    	stack.push(register[register.length - 1])
    }

    else if(argArray[i] === 'ADD') {
      register.push(stack.pop())
    }
    
    else if(argArray[i] === 'SUB') {
      stack.pop()
    }

  }
  console.log(register, stack)
}

minilang('3 PUSH 6 10 12 ADD PUSH ADD 5')


/*
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
*/

/*
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

*/

/*
function letterPercentages(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = alphabet.toUpperCase().split('')
  const lowerCase = alphabet.split('')

  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let neitherCaseCount = 0;

  string.split('').forEach(item => {
    if(upperCase.includes(item)) {
      upperCaseCount++
    }
    else if(lowerCase.includes(item)) {
      lowerCaseCount++
    }
    else {
      neitherCaseCount++
    }
  })

  const length = string.length
  const upperPercentage = (upperCaseCount / length) * 100
  const lowerPercentage = (lowerCaseCount / length) * 100
  const neitherPercentage = (neitherCaseCount / length) * 100

  return {
    lowercase: lowerPercentage,
    uppercase: upperPercentage,
    neither: neitherPercentage
  }
}

/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/

/*

console.log(letterPercentages('abCdef 123'))
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'))
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'))
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
*/

/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:

Copy Code
*/
/*
function triangle(num1, num2, num3) {
  const sidesArr = [num1, num2, num3].sort((a,b) => a - b)

  if(sidesArr[0] + sidesArr[1] < sidesArr[2]) return 'invalid'
  if(sidesArr.includes(0)) return 'invalid'

  if(sidesArr[1] == sidesArr[0] && sidesArr[2] == sidesArr[1]) return 'equilateral'
  if(sidesArr[0] == sidesArr[1] || sidesArr[1] == sidesArr[2]) return 'isoceles'
  else {
    return 'scalene'
  }
}

console.log(triangle(3, 3, 3))  // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

*/
/*
const age = Number(readline.question('What is your age'))
const retireAge = Number(readline.question('What age would you like to reture'))

const date = new Date()
const year = date.getFullYear()

console.log(`It is ${year} you can retire in ${retireAge - age} in the year ${year + (retireAge - age)}`)
*/

/*
const isPalindrome = s => s === s.split('').reverse().join('')

console.log(isPalindrome('madam'))
*/

/*
function isRealPalindrome(s) {
  const alphaNumerArr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('')
  const filterArr = s.split('').filter(item => alphaNumerArr.includes(item.toLowerCase())).map(item => item.toLowerCase())

  return filterArr.join('') == filterArr.reverse().join('')
}
console.log(isRealPalindrome('123ab321'))
*/

/*
function isPalindromicNumber(num) {
  return num === Number(num.toString().split('').reverse().join(''))
}

console.log(isPalindromicNumber(34543), isPalindromicNumber(123210),isPalindromicNumber(22) )
*/

/*
function runningTotal(arr) {
  let num = 0;
  const sumArr = []

  for(let i = 0; i < arr.length; i++) {
    num += arr[i];
    sumArr.push(num)
  }
  return sumArr
}

console.log(runningTotal([14, 11, 7, 15, 20])   )
*/


/*
const wordSizes = s => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphaArr = alphabet.split('').concat(...alphabet.toUpperCase().split(''))

  const obj = {}
  if(!s.length) {
    return obj;
  }
  const arr = s.split(' ')
  for(const word of arr) {
    const length = word.split('').filter(item => alphaArr.includes(item)).length
    if(!obj[length]) {
      obj[length] = 1
    }
    else {
      obj[length]++
    }
  }
  return obj;
}

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'))
*/
/*

function swap(string) {
  const arrOfStrings = string.split(' ')
  const reverseWordsArr = []
  for(const word of arrOfStrings) {
    reverseWordsArr.push(word.split('').reverse().join(''))
  }
  return reverseWordsArr.join(' ')
}

console.log(swap('Abcde'))
*/

/*
const union = (arr1, arr2) => {
  const newArr = arr1.concat(...arr2)
  return [...new Set(newArr)]
}

console.log(union([1, 3, 5], [3, 6, 9]) )

*/

/*
function halvsies(arr) {
  if(!arr.length) {
    return []
  }
  if(arr.length % 2 === 0) {
    const firstHalf = arr.slice(0, arr.length / 2 )
    const secondHalf = arr.slice(arr.length / 2)
    return [firstHalf, secondHalf]
  }
  const firstHalf = arr.slice(0, arr.length / 2 + 1 )
  const secondHalf = arr.slice(arr.length / 2 + 1)
  return [firstHalf, secondHalf]
}

console.log(halvsies([]))
*/

/*

function findDup(arr) {
  return arr.filter((item, idx, arr) => {
    return !(arr.indexOf(item) == idx)
  })
}

console.log(findDup([1,2,3,4,1,2]))
*/

/*
function interleave(arr1, arr2) {
  let position = 1;
  const combinedArr = arr1
  for(let i = 0; i < arr2.length; i++) {
    combinedArr.splice(position, 0, arr2[i])
    position += 2
  }
  console.log(combinedArr)
}

interleave([1, 2, 3,5,6,7,8], ['a', 'b', 'c', 'd', 'e', 'f'])
*/
/*

function multiplicativeAverage(arr) {
  return (arr.reduce((accum, num) => accum *= num, 1) / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]); 
multiplicativeAverage([2, 5, 7, 11, 13, 17]);
*/

/*
function multiplyList(arr1, arr2) {
  const productArr = []
  for(let i = 0; i < arr1.length; i++) {
    productArr.push(arr1[i] * arr2[i])
  }
  console.log(productArr)
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
*/

/*
function digitList(num) {
  return (num.toString().split('').map(item => parseInt(item)))
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
*/

/*

function triangle(num1, num2, num3) {
  const ANGLE_ARR = [num1, num2, num3]
  const ANGLE_SUM = ANGLE_ARR.reduce((acc, item) => acc + item, 0)

  if(ANGLE_ARR.includes(0)) return 'invalid'
  if(ANGLE_SUM !== 180) return 'invalid'
  if(ANGLE_ARR.includes(90)) return 'right'
  if(ANGLE_ARR.filter(item => item > 90).length > 0) return 'obtuse'
  else {
    return 'acute'
  }
}
*/
/*

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
*/

/*
function sumSquareDifference(num) {
  let sum = 0;
  let counter = 1;

  while(counter <= num) {
    sum += counter;
    counter++
  }

  let squareSum = 0;
  let secondCounter = 1;

  while(secondCounter <= num) {
    squareSum += (secondCounter**2)
    secondCounter++
  }
  
  console.log(sum**2 - squareSum)
}

sumSquareDifference(100)
*/

/* bubble sort solution

function bubbleSort(array) {
  const arr = array
  let repeat = true;

  while(repeat) {
    const copyArr = arr.slice()
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[i+1]] = [arr[i + 1], arr[i]]
      }
    }

    repeat = false;
    for(let i = 0; i < copyArr.length; i++) {
      if(copyArr[i] !== arr[i]) {
        repeat = true;
        break;
      }
    }
  }
  return (arr)
}

bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'])
*/

/*
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

function getLongestSentence(string) {
  const arr = []
  const arrOfStrings = string.split('')
  for(let i = 0; i < string.length; i++) {
    if(['!', '?', '.'].includes(arrOfStrings[i])) {
      let mutate = arrOfStrings.splice(0, arrOfStrings.slice(0, i).length)
      arr.push(mutate)

      console.log(arr, arrOfStrings)
    }
  }
  for(let item of arr) {
    item.join('')
  }
}


getLongestSentence('hello, my name is bob. how are you? I\'m doing well')
*/

/*
function wordToDigit(string) {
  const arrOfNumStrings = {
    'one': 1,
    'two': 2,
    'three': 3, 
    'four': 4,
    'five': 5,
    'six': 6, 
    'seven': 7, 
    'eight': 8, 
    'nine': 9, 
    'ten': 10
  }

  const excludeArr = ['?', '.', ',', '!']

  const wordsArr = string.split(' ')
  const filterPeriodArr = wordsArr.map(item => {
    if(excludeArr.includes(item[item.length - 1])) {
      return item.slice(0, item.length - 1)
    }
    return item
  })

  const replacedArr = filterPeriodArr.map(item => {
    if(Object.keys(arrOfNumStrings).includes(item)) {
      return arrOfNumStrings[item]
    }
    else {
      return item
    }
  })
  
  function replaceWord(numArr, originalArr) {
    const length = numArr.length
    const replacedArr = []

    for(let i = 0; i < length; i++) {
      if(numArr[i] !== originalArr[i]) {
        if(Object.keys(arrOfNumStrings).includes(originalArr[i].slice(0, originalArr[i].length - 1))) {
          replacedArr.push(numArr[i] + originalArr[i].slice(originalArr[i].length - 1))
        }
        else if(typeof numArr[i] == 'string' && typeof originalArr[i] == 'string') {
          replacedArr.push(originalArr[i])
        }
        else {
          replacedArr.push(numArr[i])
        }
      }
      else {
        replacedArr.push(numArr[i])
      }
    }
    return replacedArr
  }

  return (replaceWord(replacedArr, wordsArr).join(' '))
}
console.log(wordToDigit('Please call me at! five! five! five one, two? three four. Thanks.'))
// "Please call me at 5 5 5 1 2 3 4. Thanks."
*/

/*
function fib(num) {
  if(num <= 1) {
    return 1;
  }
  else {
    return fib(num - 1) + fib(num - 2)
  }
}

console.log(fib(3))
*/

/*
function fib(num) {
  const arr = [1, 1]
  for(let i = 1; i < num - 1; i++) {
    arr.push(arr[i] + arr[i - 1])
  }
  return arr.reverse()[0]
}

console.log(fib(999))
*/ 

/*
function sum(num) {
  const total = num.toString().split('').reduce((acc, item) => acc + parseInt(item), 0)
  console.log(total)
}

sum(123456787)
*/
/*
const isBlockWord = (string) => {

  let answer = true;
  const arrOfBlocks = {
    'BO': 1, 
    'XK': 1, 
    'DQ': 1, 
    'CP': 1, 
    'NA': 1, 
    'GT': 1, 
    'RE': 1, 
    'FS': 1, 
    'JW': 1, 
    'HU': 1, 
    'VI': 1, 
    'LY': 1, 
    'ZM': 1
  }

  const letterArr = string.toUpperCase().split('')
  const keysArr = Object.keys(arrOfBlocks).flat()

  letterArr.forEach(item => {
    for(let block of keysArr) {
      if(block.split('').includes(item)) {
        if(arrOfBlocks[block] === 0) {
          answer = false;
        }
        else {
          arrOfBlocks[block]--
        }
      }
    }
  })
  return (answer)
}

/*
1. initalize an object which contains the two letter blocks as keys and set the value for each block to 1 
2. initalize a variable which contains the uppercased string argument and is split into an array of letters
3. initalize a variable with a value of true
4. initalize a variable which contains an array of keys from the object in step 1 that is only one level deep note: use Object.keys() and .flat() to do this
5. iterate through the array of letters from step 2 
  a. For each letter, initalize a loop and loop through each element(block) in the array from step 4
  b. for each iteration of the loop in step a, split the block/current element into a two letter array and check which block contains the current letter/element in step 5. 
  c. once we know which block contains our letter in step b. check whether:
    1.) if that block in our object from step 1 has a value of 0. If so, set the answer to false
    2.) if not, decrement the value of that block in the object from step 1 to a value of 0
6. return the variable from step 3
*/

/*
function lightsOn(switches) {
  const switchObj = {};
  let pass = 2;
  const arrOfOnSwitches = []

  for(let i = 1; i <= switches; i++) {
    switchObj[i] = 1
  }

  for(let i = 0; i < switches; i++) {
    for(const num in switchObj) {
      if(parseInt(num) % pass === 0) {
        if(switchObj[num]) {
          switchObj[num] = 0
        }
        else {
          switchObj[num] = 1
        }
      }
    }
    pass++
  }
  for (const num in switchObj) {
    if(switchObj[num] == 1) {
      arrOfOnSwitches.push(num)
    }
  }
  console.log(arrOfOnSwitches)
}

lightsOn(100)
/*
1. initalize an object
2. initalize a variable with a value of 2
3. initalize an empty array;
4. create a loop with the initalizer set to 1 and the condition set to less than or equal to the value of the switches argument, increment the initalizer by one after each loop
  a.) in each iteration of the loop, create a new property in the object from step 1. The key should be set to the initalizer and the value should also be set to the initalizer in each iteration from the loop in 4.
5. create another loop with the initializer set to 0 and the condition to less than the value of the switches argument, increment the initalizer by one after each loop
  a.) Inside the loop in 5, create a new loop which loops through the object in step 1.
    1.) Inside this loop from step a, parse each key to a number value and check if:
      i.) Using the modulus operator, check if the key is evenly divisible by the value of the variable in step 2.
        1.) if the previous step yields true; set the value of the key to 0 if the current value of the key was 1 and 1 if the current value of the key was 0.
  b.) increment the variable in step 2 by one
6. create a loop with loops through the object in step 1
  a.) check whether a value is set to one for each key. 
    1.) if so, push the key that is associated with this value to the array in step 3.
7. return the array from step 3.
*/

/*
function merge(arr1, arr2) {
  const arr = []

  const longerArr = arr1.length >= arr2.length ? arr1.concat() : arr2.concat()
  const shorterArr = arr1.length >= arr2.length ? arr2.concat() : arr1.concat()

  for(let i = 0; true;) {
    if(!shorterArr.length) {
      arr.push(...longerArr)
      break;
    }
    else if(!longerArr.length) {
      arr.push(...shorterArr)
      break;
    }
    if(shorterArr[i] <= longerArr[i]) {
      arr.push(shorterArr[i])
      shorterArr.shift()
    }
    else {
      arr.push(longerArr[i])
      longerArr.shift()
    }
  }
  console.log(arr)
}

merge([-3, -2, 1,2,3,5,20,111], [4,5,6,10, 20, 30, 50])

*/

function binarySearch(arr, val) {
  let condition = true;
  let found;
  const copyArr = arr.concat()
  while(condition) {
    if(!copyArr.length) break;
    let middleVal = copyArr[Math.floor(copyArr.length/2)]
    if(middleVal === val) {
      found = arr.indexOf(val)
      break;
    }
    else if(middleVal < val) {
      copyArr.splice(0, copyArr.length % 2 == 0 ? copyArr.length / 2 + 1 : Math.floor(copyArr.length / 2) + 1)
      console.log(copyArr)
    }
    else {
      copyArr.splice(copyArr.indexOf(middleVal), copyArr.length % 2 == 0 ? copyArr.length / 2 + 1 : Math.floor(copyArr.length / 2) + 1)
    }
  }
  console.log(found, copyArr[found])
}

binarySearch([1,2,3,4,5,6,7,8,9,10],5)