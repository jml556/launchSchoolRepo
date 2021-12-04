class Country {
  constructor(name, size, location) {
    this.name = name;
    this.size = size;
    this.location = location;
  }
  getName() {
    console.log(this.name)
  }

  getArea() {
    console.log(this.area)
  }

  getLocation() {
    console.log(this.location)
  }
}

class State extends Country {
  constructor(name, size, location) {
    super(name, size, location)
      this.name = name;
      this.size = size;
      this.location = location;
  }

  getState() {
    console.log('state is: ', this.name)
  }
}

const md = new State('Maryland', 100, 'west')

md.getState()

md.getName()