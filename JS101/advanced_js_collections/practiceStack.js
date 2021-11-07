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


