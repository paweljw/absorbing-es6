/* global describe, it, expect */

import { Console } from './support/console'

let colors = [ 'red', 'green', 'blue' ]
let baseline = new Console()

for (let i = 0; i < colors.length; i++) {
  baseline.log(colors[i])
}

describe('forEach', () => {
  it('behaves exactly like a for loop', () => {
    let result = new Console()
    colors.forEach((color) => { result.log(color) })

    expect(result.backlog).toEqual(baseline.backlog)
  })

  it('very inefficiently sums an array of numbers', () => {
    let numbers = [1, 2, 3, 4]
    let sum = 0
    numbers.forEach((number) => { sum += number })
    expect(sum).toBe(10)
  })
})
