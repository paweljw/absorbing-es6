/* global describe, it, expect */

let numbers = [10, 20, 30]

describe('reduce', () => {
  it('sums with 0', () => {
    expect(numbers.reduce((acc, number) => { return acc + number }, 0)).toBe(60)
  })

  it('sums with 5, because why not', () => {
    expect(numbers.reduce((acc, number) => { return acc + number }, 5)).toBe(65)
  })
})
