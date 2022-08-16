import { getInitials, keepNumbers } from './stringUtils';

test('getInitials', () => {
  expect(getInitials('Lautaro Lopez')).toBe('L L');
});

test('getNumber', () => {
  expect(keepNumbers('test1')).toBe('1');
  expect(keepNumbers('test')).toBe('');
  expect(keepNumbers('1')).toBe('1');
  expect(keepNumbers('')).toBe('');
});
