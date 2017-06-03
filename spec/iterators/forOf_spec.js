/* global describe, it, expect */

const colors = [ 'red', 'green', 'blue' ]

describe('for ... of', () => {
  it('iterates', () => {
    let otherColors = []

    for (let color of colors) {
      otherColors.push(color)
    }

    expect(colors).toEqual(otherColors)
  })
})
