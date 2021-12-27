class List {
  constructor(type) {
    this.type = type;
    this.listItems = [];
  }

  addItem(title, body) {
    const item = {
      title,
      body
    }
    this.listItems.push(item)
  }

  removeItem(title) {
    this.listItems = this.listItems.filter(item => {
     return item.title !== title 
    })
  }
}

const laundryList = new List('laundry list')

const add = laundryList.addItem.bind(laundryList)
const remove = laundryList.removeItem.bind(laundryList)

add('pants', 'four pants need to be dried')
add('shirt', 'three shirts need to be washed')

console.log(laundryList)

remove('shirt')

console.log(laundryList)

