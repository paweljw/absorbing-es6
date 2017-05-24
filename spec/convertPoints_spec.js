/* global describe, it, expect */

import { convertPoints } from '../src/convertPoints'

const points = [
  [ 4, 5 ],
  [ 6, 7 ]
]

const convertedPoints = [
  { x: 4, y: 5 },
  { x: 6, y: 7 }
]

describe('convertPoints', () => {
  it('converts points', () => {
    expect(convertPoints(points)).toEqual(convertedPoints)
  })
})
