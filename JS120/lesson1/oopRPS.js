/*
const readline = require('readline-sync')
let play = false;

const question = readline.question('Would you like to play?').toLowerCase()

question == 'yes' ? play = true : play = false;
*/
const readline = require('readline-sync')
rockPaper = {
  rock: 'rock',
  paper : 'paper',
  scissor: 'scissor',
  userhand: undefined,
  arrOfHands: ['rock', this.rock],

  getRandomHand() {
    console.log(this.arrOfHands)
    const randomNum = Math.round(Math.random() * 2)
    return this.arrOfHands[randomNum]
  },

  displayMessage() {
    let question = readline.question('Which hand? \nrock, paper, or scissor?')
    console.log(this.arrOfHands)
    while(!this.arrOfHands.includes(question)) {
      question = 'you need to type a proper hand'
    }
  }
}

//rockPaper.getRandomHand()



/*
while(play) {
  console.log('hi')
  break
  //ask player which hand
  //choose computer hand
  //play again?
    //if not set question to false;
}
*/

