import { filterTodos, completedOnly, pendingOnly } from './handleFilter';

const todos = [
  {
    id: 1,
    name: 'do the thing',
    isComplete: false,
  },
  {
    id: 2,
    name: 'do the second thing',
    isComplete: false,
  },
  {
    id: 3,
    name: 'do the third thing',
    isComplete: true,
  },
];

const incompleteOnly = [
  {
    id: 1,
    name: 'do the thing',
    isComplete: false,
  },
  {
    id: 2,
    name: 'do the second thing',
    isComplete: false,
  },
];

const completeOnly = [
  {
    id: 3,
    name: 'do the third thing',
    isComplete: true,
  },
];

test('tests completedOnly returns only completed todos', () => {
  const actual = completedOnly(todos);
  const expected = completeOnly;
  expect(actual).toEqual(expected);
});

test('tests pendingOnly returns only pending todos', () => {
  const actual = pendingOnly(todos);
  const expected = incompleteOnly;
  expect(actual).toEqual(expected);
});

test('tests filterTodos returns all todos when given ALL', () => {
  const actual = filterTodos(todos, 'ALL');
  const expected = todos;
  expect(actual).toEqual(expected);
});

test('tests filterTodos returns only pending todos when given PENDING', () => {
  const actual = filterTodos(todos, 'PENDING');
  const expected = incompleteOnly;
  expect(actual).toEqual(expected);
});

test('tests filterTodos returns only completed todos when given COMPLETED', () => {
  const actual = filterTodos(todos, 'COMPLETED');
  const expected = completeOnly;
  expect(actual).toEqual(expected);
});

test('tests filterTodos returns all todos when given no second argument', () => {
  const actual = filterTodos(todos);
  const expected = todos;
  expect(actual).toEqual(expected);
});
