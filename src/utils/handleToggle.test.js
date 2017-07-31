import { getTodo, toggleChecked, returnUpdatedTodos } from './handleToggle';

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
    isComplete: false,
  },
];

test('tests getTodo with proper input', () => {
  const actual = getTodo(todos, 2);
  const expected = {
    id: 2,
    name: 'do the second thing',
    isComplete: false,
  };
  expect(actual).toEqual(expected);
});

test('tests getTodo with improper input', () => {
  const actual = getTodo(todos, 4);
  const expected = undefined;
  expect(actual).toBe(expected);
});
