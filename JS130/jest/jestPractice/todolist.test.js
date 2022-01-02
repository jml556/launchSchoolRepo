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
  // your tests go here
});