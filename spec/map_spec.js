/* global describe, it, expect */

describe('map', () => {
  it('doubles the numbers', () => {
    let numbers = [ 1, 2, 3 ]
    let doubledNumbers = numbers.map(number => { return number * 2 })
    expect(doubledNumbers).toEqual([2, 4, 6])
  })

  it('plucks properties', () => {
    let cars = [
      {name: 'Buick', price: 'cheap'},
      {name: 'Camaro', price: 'expensive'}
    ]
    let prices = cars.map(car => { return car.price })
    expect(prices).toEqual(['cheap', 'expensive'])
  })
})
