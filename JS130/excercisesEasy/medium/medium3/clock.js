class Clock {
  constructor() {
    this.currentTime = null;
  }

  at(hours, minutes = '00') {
    if(minutes == '00') {
      if(hours.toString().length === 1) {
        this.currentTime = `0${hours}:00`;
        return `0${hours}:00`
      }
      this.currentTime = `${hours}:${minutes}`
      return `${hours}:${minutes}`
    }
    else {
      if(hours.toString().length === 1) {
        if(minutes.toString().length == 1) {
          this.currentTime = `0${hours}:0${minutes}`
          return `0${hours}:0${minutes}`
        }
        this.currentTime =  `0${hours}:${minutes}`
        return `0${hours}:${minutes}`
      }
      if(minutes.toString().length == 1) {
        this.currentTime = `${hours}:0${minutes}`
        return `${hours}:0${minutes}`
      }
      this.currentTime = `${hours}:${minutes}`
      return `${hours}:${minutes}`
    }
  }

  formatNum(hours, minutes) {
    
  }

  add(minutes) {
    let hours;
    if(minutes > 60) {
      hours = Math.floor(minutes / 60).toString()
      minutes = minutes % 60
    }
    else if(minutes == 60) {
      hours = 1
      minutes = 0
    }
    else {
      hours = 0;
      minutes = minutes
    }
    return this.formatNum(hours, minutes)
  }

}

module.exports = new Clock()



