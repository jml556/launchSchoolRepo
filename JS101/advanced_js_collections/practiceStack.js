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

function swap(string) {
  const arrOfStrings = string.split(' ')
  const reverseWordsArr = []
  for(const word of arrOfStrings) {
    reverseWordsArr.push(word.split('').reverse().join(''))
  }
  return reverseWordsArr.join(' ')
}

console.log(swap('Abcde'))