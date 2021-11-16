//make : Jaguar
// fuel level : 0.4
// Engine Status: off

/*
function createCar(make, fuelLevel, engineStatus) {

  const newCar = {}  
  
  newCar.make = make;
  newCar.fuelLevel = fuelLevel;
  newCar.engineStatus = engineStatus;

  newCar.drive = function() {
    newCar.engineStatus = true

    if(newCar.fuelLevel === 0) {
      newCar.engineStatus = false
      console.log('No more fuel', newCar.engineStatus)
    }
    
    newCar.fuelLevel -= 1
    console.log(newCar.fuelLevel)
  }

  newCar.getStatus = function() {
    console.log(newCar.make, newCar.fuelLevel, newCar.engineStatus)
  }

  return newCar
}

const newCar = createCar('jaguar', 2, false)

newCar.drive()
newCar.drive()
newCar.drive()
*/

/*
const book1 = {
  title: 'Mythos',
  Author: 'Stephen Fry',
  author: 'johanna',

  getDescription() {
    console.log(book1.title, book1.Author)
  }
}

console.log(book1.getDescription())
*/
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      let text;
      this.read ? text = 'have' : text = 'have not'
      console.log(this.title, this. author, `I ${text} read ${this.title}`)
    },

    readBook() {
      this.read = true;
    }
  }
}

const book1 = createBook('Bob is fun', 'Smith')
const book2 = createBook('hello world', 'the best', true)

book1.readBook()
book1.getDescription()
