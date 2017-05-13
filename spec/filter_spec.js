/* global describe, it, expect */

let produce = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
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
})
