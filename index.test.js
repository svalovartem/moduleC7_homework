const reverse = require('./index');

test('reverse string "Andre"', () => {
  expect(reverse('Andre')).toBe('erdnA');
});
