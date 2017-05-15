/* global describe, it, expect */

function addNumbers (...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

describe('addNumbers', () => {
  it('adds two numbers', () => expect(addNumbers(1, 2)).toBe(3))
  it('adds four numbers', () => expect(addNumbers(1, 2, 3, 4)).toBe(10))
  it('adds eight numbers', () => expect(addNumbers(1, 2, 3, 4, 1, 2, 3, 4)).toBe(20))
})
