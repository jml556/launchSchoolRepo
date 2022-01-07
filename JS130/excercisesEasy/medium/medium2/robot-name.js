Math.seedrandom = require('seedrandom')

module.exports = class Robot {
  constructor() {
    this.serialNum = null;
  }

  static names = []

  generateRandomSerial() {
    const alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const numArr = '1234567890'
    const firstLetter = alphaArr[Math.floor(Math.random() * 26)].toUpperCase()
    const secondLetter = alphaArr[Math.floor(Math.random() * 26)].toUpperCase()
    const thirdLetter = numArr[Math.floor(Math.random() * 26)]
    const firstNum = numArr[Math.floor(Math.random() * 10)]
    const secondNum = numArr[Math.floor(Math.random() * 10)]
    const thirdNum = numArr[Math.floor(Math.random() * 10)]

    return [firstLetter, secondLetter, thirdLetter, firstNum, secondNum, thirdNum].join('')
  }

  name() {
    if(this.serialNum) {
      return this.serialNum
    }
    let self = this;

    function generateSerial() {
      let serial = self.generateRandomSerial()

      while(Robot.names.includes(serial)) {
        serial = self.generateRandomSerial()
      }

      Robot.names.push(serial)
      self.serialNum = serial
      return serial
    }

    return generateSerial()
  }

  reset() {
    let self = this;
    function generateSerial() {
      let serial = self.generateRandomSerial()

      while(Robot.names.includes(serial)) {
        serial = self.generateRandomSerial()
      }

      Robot.names.push(serial)
      self.serialNum = serial
      return serial
    }

    return generateSerial()
  }
}





