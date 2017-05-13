/* global describe, it, expect */

import { unique } from './../../src/unique'

const numbers = [10, 20, 30]

describe('reduce', () => {
  it('sums with 0', () => expect(numbers.reduce((acc, number) => { return acc + number }, 0)).toBe(60))
  it('sums with 5, because why not', () => expect(numbers.reduce((acc, number) => { return acc + number }, 5)).toBe(65))
})

describe('unique', () => {
  it('returns an array which is already unique', () => expect(unique(numbers)).toEqual(numbers))

  it('makes nonunique array unique', () => {
    const array = [1, 1, 2, 2, 3, 3, 3, 4]
    expect(unique(array)).toEqual([1, 2, 3, 4])
  })
})
