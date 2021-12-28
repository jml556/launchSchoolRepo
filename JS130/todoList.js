
/*
First iteration
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
*/



class TodoList {
  constructor(type, date) {
    this.type = type;
    this.time = null;
    if(this.time == null) {
      this.time = date;
    }
  }

  static todoItems = [];

  addItem(item) {
    TodoList.todoItems.push(item)
  }

  removeItem(item) {
    TodoList.todoItems = TodoList.todoItems.filter(ele => {
      ele.title !== item.title
    })
  }

  forEach(array, func) {
    const copyArr = array.slice()
    for(let i = 0; i < array.length; i++) {
      func(copyArr[i])
    }
  }
}

class ToDoItem extends TodoList {
  constructor(title, description, date, type) {
    super(type, date)
    this.title = title;
    this.description = description;
    this.date = date;
    this.complete = false;
    this.addItem({title, description, date})
  }

  done() {
    this.complete = true;
  }

  revert() {
    this.complete = !this.complete
  }
}

const item1 = new ToDoItem('pickup', 'go to the warehouse', '12/21/2021', 'active')
const item2 = new ToDoItem('pickup1', 'go to the warehouse', '12/22/2021', 'active1')
const item3 = new ToDoItem('pickup2', 'go to the warehouse', '12/23/2021', 'active2')
const item4 = new ToDoItem('pickup3', 'go to the warehouse', '12/24/2021', 'active3')

TodoList.prototype.forEach(TodoList.todoItems, (item) => {
  console.log(item)
})





// omitted code

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.
/*

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  // rest of class needs implementation
}

let list = new TodoList("Today's Todos");
console.log(list); // TodoList { title: "Today's Todos", todos: [] }
/*
// Omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list);

list.add(1); // delete this line after testing it
*/


