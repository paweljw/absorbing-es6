/* global describe, it, expect */

import { Bookshop, EnhancedBookshop } from '../src/bookshop'

function subject (constructWith) {
  const inventory = [
    { title: 'Judas Unchained', price: 20 },
    { title: 'Abyss without dreams', price: 10 }
  ]
  return constructWith(inventory)
}

describe('Bookshop', () => {
  it('sums inventory', () => expect(subject(Bookshop).inventoryValue()).toBe(30))
  it('gives price for title', () => expect(subject(Bookshop).priceForTitle('Judas Unchained')).toBe(20))
})

describe('EnhancedBookshop', () => {
  it('sums inventory', () => expect(subject(EnhancedBookshop).inventoryValue()).toBe(30))
  it('gives price for title', () => expect(subject(EnhancedBookshop).priceForTitle('Judas Unchained')).toBe(20))
})
