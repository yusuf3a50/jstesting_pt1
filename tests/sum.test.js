// tests/sum.test.js
// When you want to run the tests:
// npm run test

const [sum, multiply] = require('../src/sum.js')

test('adds 1 + 2, expects 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('foo', () => {
  expect(multiply(2, 4)).toBe(8)
})