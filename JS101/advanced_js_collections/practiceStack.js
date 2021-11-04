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
