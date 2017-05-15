/* global describe, it, expect */

let defaultColors = ['green', 'blue']
let userColors = ['red', 'orange']

describe('spread operator', () => {
  it('joins the arrays', () => expect([...defaultColors, ...userColors]).toEqual(['green', 'blue', 'red', 'orange']))
  it('adds and joins the arrays', () => {
    expect(['yellow', ...defaultColors, ...userColors]).toEqual(['yellow', 'green', 'blue', 'red', 'orange'])
  })
})
