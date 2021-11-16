const readline = require('readline-sync')
let play = false;

const question = readline.question('Would you like to play?').toLowerCase()

question == 'yes' ? play = true : play = false;

while(question) {
  //ask player which hand
  //choose computer hand
  //play again?
    //if not set question to false;
}