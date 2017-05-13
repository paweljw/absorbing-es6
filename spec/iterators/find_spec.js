/* global describe, it, expect */

import { Car } from './../../src/Car'
import { findWhere, betterFindWhere } from './../../src/findWhere'

let users = [
  {name: 'Jill', id: 1},
  {name: 'Alex', id: 2},
  {name: 'Jack', id: 3},
  {name: 'Alex', id: 4}
]

let cars = [
  new Car('Buick', 1953),
  new Car('Camaro', 1999),
  new Car('Focus', 2004),
  new Car('Impala', 1967)
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

describe('findWhere', () => {
  it('finds Alex', () => {
    let alex = findWhere(users, { name: 'Alex' })
    expect(alex.id).toBe(2)
  })

  it('finds a camaro', () => {
    let camaro = findWhere(cars, { model: 'Camaro' })
    expect(camaro.model).toBe('Camaro')
  })
})

describe('betterFindWhere', () => {
  it('finds the other Alex', () => {
    let alex = betterFindWhere(users, { name: 'Alex', id: 4 })
    expect(alex.id).toBe(4)
  })

  it('finds a 1967 Impala', () => {
    let impala = betterFindWhere(cars, { model: 'Impala', year: 1967 })
    expect(impala).toEqual(new Car('Impala', 1967))
  })

  it('doesnt find a 2000 Focus', () => {
    let notFocus = betterFindWhere(cars, { model: 'Focus', year: 2000 })
    expect(notFocus).toBeFalsy()
  })
})
