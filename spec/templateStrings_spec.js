/* global describe, it, expect */

const YEAR = 2017

describe('template strings', () => {
  it('fills in the template with variable', () => {
    expect(`The year is ${YEAR}`).toEqual('The year is 2017')
  })

  it('fills in the template with full expression', () => {
    expect(`The year is ${YEAR + 3}`).toEqual('The year is 2020')
  })
})
