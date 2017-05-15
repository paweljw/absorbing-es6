/* global describe, it, expect */

let left = {one: 'two', five: false}

describe('assign', () => {
  it('merges the hashes', () => {
    let right = {three: 'four', five: true}
    let result = Object.assign({}, left, right)
    expect(result).toEqual({one: 'two', three: 'four', five: true})
  })
})
