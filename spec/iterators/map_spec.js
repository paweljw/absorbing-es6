/* global describe, it, expect */

import { pluck, reducePluck } from './../../src/pluck'

const cars = [
  {name: 'Buick', price: 'cheap'},
  {name: 'Camaro', price: 'expensive'}
]

describe('map', () => {
  it('doubles the numbers', () => {
    const numbers = [ 1, 2, 3 ]
    const doubledNumbers = numbers.map(number => { return number * 2 })
    expect(doubledNumbers).toEqual([2, 4, 6])
  })

  it('plucks properties', () => {
    const prices = cars.map(car => { return car.price })
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})

describe('pluck', () => {
  it('plucks properties', () => {
    const prices = pluck(cars, 'price')
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})

describe('reducePluck', () => {
  it('plucks properties', () => {
    const prices = reducePluck(cars, 'price')
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})
