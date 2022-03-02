/*
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
2

function sumEvenFibs() {
  const arrOfFibs = [0,1]
  let i = 1;
  while(arrOfFibs[i] <= 4000000) {
    arrOfFibs.push(arrOfFibs[i] + arrOfFibs[i - 1])
    i++
  }

  let answer = 0;

  for(let i = 0; i < arrOfFibs.length; i++) {
    if(arrOfFibs[i] % 2 === 0) {
      answer += arrOfFibs[i]
    }
  }

  return answer;

}

console.log(sumEvenFibs())

problem 2

function getDifference(num) {

  function getSumOfSquares(num) {
    let total = 0;
    for(let i = 1; i <= num; i++) {
      total += i**2
    }
    return total;
  }

  function getSquareOfSum(num) {
    let total = 0;
    for(let i = 1; i <= num; i++) {
      total += i
    }
    return total**2
  }

  const sumOfSquares = getSumOfSquares(num)
  const squareOfSum = getSquareOfSum(num)

  return squareOfSum - sumOfSquares
}

console.log(getDifference(100))
*/

/*problem smallest multiple*/

function getSmallestMultiple() {
  const arr = []

  const checkNum = (num) => {
    let answer = true
    for(let i = 1; i <= 20; i++) {
      if(num % i !== 0) {
        answer = false;
        break;
      }      
    }
    return answer
  }

  const inc = 19;
  let total = 19;

  while(arr.length === 0) {
    if(checkNum(total)) {
      arr.push(total)
    }
    else {
      total += inc
    }
  }

  return arr[0]
}

console.log(getSmallestMultiple())