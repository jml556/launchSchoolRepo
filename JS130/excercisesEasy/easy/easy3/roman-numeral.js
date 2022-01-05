module.exports = class RomanNumeral {
  constructor(num) {
    this.num = num
  }

  toRoman() {
    let numCount = this.num;
    let numeralArr = []
    const orderedNums = {
      M: 1000,
     CM: 900,
      D: 500,
     CD: 400,
      C: 100,
     XC: 90,
      L: 50,
     XL: 40,
      X: 10,
     IX: 9,
      V: 5,
     IV: 4,
      I: 1
   }

    const timesToPushArr = []
    const orderedArr = Object.entries(orderedNums)

    orderedArr.forEach(item => {
      const numOfTimes = Math.floor(numCount / item[1])
      if(numOfTimes > 0) {
        numCount -= (numOfTimes * item[1])
        timesToPushArr.push([numOfTimes, item[0]])
      }
    })

    timesToPushArr.forEach(item => {
      let incrementer = item[0]
      while(incrementer > 0) {
        numeralArr.push(item[1])
        incrementer--
      }
    })
    return numeralArr.join('')
  }
}

