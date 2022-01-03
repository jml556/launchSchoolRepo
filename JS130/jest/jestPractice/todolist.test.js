const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('Check list if length is equal to the number of list items added', () => {
    expect(list.size()).toBe(3)
  })

  test('expect items to be an array', () => {
    expect(list.toArray()).toContain(todo1, todo2, todo3)
  })

  test('check if first todo is returned', () => {
    expect(list.first()).toEqual(todo1)
  })

  test('remove and return first element', () => {
    const length = list.todos.length;
    expect(list.shift()).toEqual(todo1)
    expect(list.todos.length).toEqual(length - 1)
  })

  test('isDone returns true when all items are done', () => {
    list.todos.forEach(item => {
      item.markDone()
    })
    expect(list.isDone()).toBe(true)
  })

  test('check if add method returns a type error', () => {
    expect(() => list.add('hello world')).toThrow()
  })

  test('check if todo item has a valid index', () => {
    expect()
  })


  // your tests go here
});