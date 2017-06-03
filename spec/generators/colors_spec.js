/* global describe, it, expect */

function * colors () {
  yield 'red'
  yield 'green'
  yield 'blue'
}

describe('*colors', () => {
  it('returns colors', () => {
    let colorsGen = colors()
    expect(colorsGen.next()).toEqual({ value: 'red', done: false })
    expect(colorsGen.next()).toEqual({ value: 'green', done: false })
    expect(colorsGen.next()).toEqual({ value: 'blue', done: false })
    expect(colorsGen.next()).toEqual({ done: true, value: undefined })
  })

  it('works with for ... of', () => {
    let otherColors = []

    for (let color of colors()) {
      otherColors.push(color)
    }

    expect(otherColors).toEqual(['red', 'green', 'blue'])
  })
})
