/* global describe, it, expect */

import { Node } from './../../src/btree.js'

const values = [12, 3, 8, 4, 6, 18, 9, 2, 2, 25]

let btree = new Node(3)
values.forEach((value) => { btree.insert(value) })

describe('btree', () => {
  it('walks and sorts', () => {
    let sorted = []

    for (let element of btree) {
      sorted.push(element)
    }

    expect(sorted).toEqual([2, 2, 3, 3, 4, 6, 8, 9, 12, 18, 25])
  })
})
