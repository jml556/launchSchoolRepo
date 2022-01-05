module.exports = class Anagram {
  constructor(word) {
    const letterCountObj = {}
    word.toLowerCase().split('').forEach(letter => {
      if(!letterCountObj[letter]) {
        letterCountObj[letter] = 1;
      }
      else {
        letterCountObj[letter]++;
      }
    })
    this.word = word;
    this.wordObj = letterCountObj
  }

  match(arrOfWords1) {
    const arrOfWords = arrOfWords1.map(item => item.toLowerCase())
    const answerArr = []

    for(let i = 0; i < arrOfWords.length; i++) {
      let copyObj = Object.assign({}, this.wordObj)

      for(let j = 0; j < arrOfWords[i].length; j++) {
        if(!copyObj[arrOfWords[i][j]]) {
          break;
        }
        else if (copyObj[arrOfWords[i][j]] === 0) {
          break;
        }
        copyObj[arrOfWords[i][j]]--
        if(j === arrOfWords[i].length - 1) {
          if(Object.values(copyObj).every(val => val === 0)) {
            answerArr.push(arrOfWords[i])
          }
        }
      }
    }

    return answerArr.filter(item => item !== this.word).map(word => {
      let newWord = word;
      if(!arrOfWords1.includes(word)) {
        arrOfWords1.forEach(item => {
          if(item.toUpperCase() === word.toUpperCase()) {
            newWord = item;
          }
        })
      }
      
      return newWord;
    })
  }
}
