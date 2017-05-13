/* global describe, it, expect */

import { Car } from './support/Car'

let users = [
  {name: 'Jill', id: 1},
  {name: 'Alex', id: 2},
  {name: 'Jack', id: 3},
  {name: 'Alex', id: 4}
]

let cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
]

describe('find', () => {
  it('finds Alex', () => {
    let alex = users.find(user => { return user.name === 'Alex' })
    expect(alex.id).toBe(2)
  })

  it('finds a camaro', () => {
    let camaro = cars.find(car => { return car.model === 'Camaro' })
    expect(camaro.model).toBe('Camaro')
  })
})
