/* global describe, it, expect */

let numbers = [ 1, 2, 3 ]

describe('map', () => {
  it('doubles the numbers', () => {
    let doubledNumbers = numbers.map(number => { return number * 2 })
    expect(doubledNumbers).toEqual([2, 4, 6])
  })
})
