/* global describe, it, expect */

import { reject, reduceReject } from './../support/reject'

let produce = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
]

let complicatedProduce = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name: 'banana', type: 'fruit', quantity: 10, price: 15},
  {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
  {name: 'orange', type: 'fruit', quantity: 3, price: 5}
]

describe('filter', () => {
  it('filters the vegetables', () => {
    let vegetables = produce.filter(product => { return product.type === 'vegetable' })
    expect(vegetables).toEqual([{name: 'cucumber', type: 'vegetable'}, {name: 'celery', type: 'vegetable'}])
  })

  it('filters the fruit', () => {
    let fruit = produce.filter(product => { return product.type === 'fruit' })
    expect(fruit).toEqual([{name: 'banana', type: 'fruit'}, {name: 'orange', type: 'fruit'}])
  })

  it('drops the celery', () => {
    let fruit = produce.filter(product => { return product.name !== 'celery' })
    expect(fruit).toEqual([{name: 'cucumber', type: 'vegetable'}, {name: 'banana', type: 'fruit'}, {name: 'orange', type: 'fruit'}])
  })

  it('selects vegetables which are in stock with a price less than 10', () => {
    let cart = complicatedProduce.filter(product => { return product.type === 'vegetable' && product.quantity > 0 && product.price < 10 })
    expect(cart).toEqual([])
  })

  it('selects vegetables which are in stock with a price more than 10', () => {
    let cart = complicatedProduce.filter(product => { return product.type === 'vegetable' && product.quantity > 0 && product.price > 10 })
    expect(cart).toEqual([{name: 'celery', type: 'vegetable', quantity: 30, price: 13}])
  })
})

describe('reject', () => {
  it('rejects numbers below 15', () => {
    let numbers = [10, 20, 30]
    let numbersAboveFifteen = reject(numbers, number => { return number < 15 })
    expect(numbersAboveFifteen).toEqual([20, 30])
  })
})

describe('reduceReject', () => {
  it('rejects numbers below 15', () => {
    let numbers = [10, 20, 30]
    let numbersAboveFifteen = reduceReject(numbers, number => { return number < 15 })
    expect(numbersAboveFifteen).toEqual([20, 30])
  })
})
