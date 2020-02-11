const util = require('../util')

test('adds 1 + 2 to equal 3', () => {
  expect(util.sum(1, 2)).toBe(3)
})

test('adds a + b to equal 3', () => {
  expect(util.sum('a', 'b')).toBe('ab')
})
