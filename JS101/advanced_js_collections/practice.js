const readline = require('readline-sync')
let play = false;
const emptyArr = [' ', ' ', ' ',' ', ' ',' ', ' ',' ', ' '] 

let yesOrNo = readline.question('Would you like to play tic tac toe?').toLowerCase()

while(!['yes', 'no'].includes(yesOrNo)) {
  console.log('You need to say either yes or no')
  yesOrNo = readline.question('Enter yes or no ')
}

if(yesOrNo == 'yes') {
  console.log("Awesome! let's play! Here's the board")
  displayBoard(emptyArr)
  play = true;
}
else {
  console.log('Okay, bye now!')
}

while (play) {
  const arr = emptyArr.slice()
  let mark = parseInt(readline.question('Which square would you like? Enter 1 - 9'))
  markBoard(mark, arr, 'human')
  displayBoard(arr)
  markBoard(markMachine(arr), arr, 'machine')
  displayBoard(arr)
}

function markMachine(arr) {
  let randomNum = Math.ceil(Math.random() * 9)
  console.log(arr)
  console.log(arr[randomNum - 1])
  while(!arr[randomNum - 1]) {
    randomNum = Math.ceil(Math.random() * 9)
  }
  console.log(randomNum)
  return randomNum
}

function markBoard(num, arr, player) {
  let marker = 'o'
  if(player == 'human') {
    marker = 'x'
  }
  switch(num) {
    case 1:
      arr[num - 1] = marker;
      break;
    case 2:
      arr[num - 1] = marker;
      break;
    case 3:
      arr[num - 1] = marker;
      break;
    case 4:
      arr[num - 1] = marker;
      break;
    case 5:
      arr[num - 1] = marker;
      break;
    case 6:
      arr[num - 1] = marker;
      break;
    case 7:
      arr[num - 1] = marker;
      break;
    case 8:
      arr[num - 1] = marker;
      break;
    case 9:
      arr[num - 1] = marker;
      break;
    case 10:
      arr[num - 1] = marker;
      break;
  }
}

function displayBoard(arr) {
  const [a,b,c,d,e,f,g,h,i] = arr
  console.log('');
  console.log(`     |     |     `);
  console.log(`  ${a}  |  ${b}  |  ${c}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${d}  |  ${e}  |  ${f}  `);
  console.log(`     |     |     `);
  console.log('-----+-----+-----');
  console.log(`     |     |     `);
  console.log(`  ${g}  |  ${h}  |  ${i}  `);
  console.log(`     |     |     `);
  console.log('');
}
