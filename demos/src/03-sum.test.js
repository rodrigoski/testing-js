const resta = require('./03-math-helpers.js');
// ---RESTA--\\
test('rest be 10 - 3 to equal 7', () => {
  expect(resta(10, 3)).toBe(7);
});

test('rest be 3 - 10 to equal -7', () => {
  expect(resta(3, 10)).toBe(-7);
});
