/* global describe, it, expect */

import { pluck, reducePluck } from './../support/pluck'

let cars = [
  {name: 'Buick', price: 'cheap'},
  {name: 'Camaro', price: 'expensive'}
]

describe('map', () => {
  it('doubles the numbers', () => {
    let numbers = [ 1, 2, 3 ]
    let doubledNumbers = numbers.map(number => { return number * 2 })
    expect(doubledNumbers).toEqual([2, 4, 6])
  })

  it('plucks properties', () => {
    let prices = cars.map(car => { return car.price })
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})

describe('pluck', () => {
  it('plucks properties', () => {
    let prices = pluck(cars, 'price')
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})

describe('reducePluck', () => {
  it('plucks properties', () => {
    let prices = reducePluck(cars, 'price')
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})
