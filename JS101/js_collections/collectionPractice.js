
while(true) {
  let num = Math.ceil(Math.random() * 10)
  console.log(num)
  if(num == 5) {
    break;
  }
}


// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

/*
function changeMe(str) {
  const stringArr = str.split(' ')

  for(let i = 0; i < stringArr.length; i++) {
    if(stringArr[i].split('').reverse().join('') === stringArr[i]) {
      stringArr.splice(i, 1, stringArr[i].toUpperCase())
    }
  }
  
  return stringArr.join(' ')
}

console.log(changeMe("I LOVE my mom and dad equally words hi hel"))

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []

*/
//get the sum of a row of even integers
//the nth row is given by the argument passed into the function


function getSumOfRow(int) {
  const answerArr = []
  let length = 1
  let num = 1;

  for(let i = 0; i < int; i++) {
    const arr = []

    while(arr.length < length) {
      if(num % 2 === 0) {
        arr.unshift(num)
      }
      num++
    }

    answerArr.push(arr)
    startNum = answerArr.slice().reverse()[0].reverse()[0] + 1
    length++
  }

  return answerArr[int - 1].reduce((acc, item) => acc + item, 0);
}

console.log(getSumOfRow(3))