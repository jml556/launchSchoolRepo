
const readline = require('readline-sync')
let play = false;

const question = readline.question('Would you like to play?').toLowerCase()
question == 'yes' ? play = true : play = false;

rockPaper = {
  rock: 'rock',
  paper : 'paper',
  scissor: 'scissor',
  userHand: undefined,
  compHand: undefined,
  compScore: 0,
  humanScore: 0,
  tieScore: 0,
  roundsPlayed: 0,
  getRandomHand() {
    const arrOfHands = [this.rock, this.paper, this.scissor]
    const randomNum = Math.round(Math.random() * 2)
    this.compHand = arrOfHands[randomNum]
  },

  startMessage() {
    let question = readline.question('Which hand? \nrock, paper, or scissor?')

    while(![this.rock, this.paper, this.scissor].includes(question)) {
      question = readline.question('you need to type a proper hand')
    }

    this.userHand = question
  },

  compare() {
    let [player, computer] = [this.userHand, this.compHand]
    if (player == 'rock') {
      if(computer == 'paper') this.compScore++
      if(computer == 'scissor') this.humanScore++
      if(computer == 'rock') this.tieScore++ 
    }
    if (player == 'paper') {
      if(computer == 'paper') this.tieScore++
      if(computer == 'scissor') this.compScore++
      if(computer == 'rock') this.humanScore++ 
    }
    if (player == 'scissor') {
      if(computer == 'paper') this.humanScore++
      if(computer == 'scissor') this.tieScore++
      if(computer == 'rock') this.rockScore++ 
    }
    this.roundsPlayed++
  },

  displayScore() {
    console.log(this.humanScore, this.compScore, this.tieScore, this.roundsPlayed)
  }
}

function log() {
  rockPaper.startMessage()
  rockPaper.getRandomHand()
  rockPaper.compare()
  rockPaper.displayScore()
}

while(play) {
  log()
  let playAgain = readline.question('Play again? - Yes or No').toLowerCase()
  if(playAgain == 'no') {
    console.log('thanks for playing')
    break;
    console.log('thanks for playing')
  }
}




