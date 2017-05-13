/* global describe, it, expect */

const colors = [ 'red', 'green', 'blue' ]
let baseline = []

for (let i = 0; i < colors.length; i++) {
  baseline.push(colors[i])
}

describe('forEach', () => {
  it('behaves exactly like a for loop', () => {
    let result = []
    colors.forEach((color) => { result.push(color) })

    expect(result.backlog).toEqual(baseline.backlog)
  })

  it('very inefficiently sums an array of numbers', () => {
    const numbers = [1, 2, 3, 4]
    let sum = 0
    numbers.forEach((number) => { sum += number })
    expect(sum).toBe(10)
  })

  it('calculates a series of image areas', () => {
    const images = [
      { height: 10, width: 30 },
      { height: 20, width: 90 },
      { height: 54, width: 32 }
    ]
    let areas = []

    images.forEach((image) => { areas.push(image.height * image.width) })
    expect(areas).toEqual([300, 1800, 1728])
  })
})
