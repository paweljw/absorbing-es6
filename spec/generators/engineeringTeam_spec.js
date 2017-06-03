/* global describe, it, expect */

import { engineeringTeam, TeamIterator } from './../../src/engineers.js'

describe('enginnering team', () => {
  it('returns people', () => {
    let names = []
    for (let name of TeamIterator(engineeringTeam)) {
      names.push(name)
    }
    expect(names).toEqual(['Alice', 'Bob', 'Eve', 'Jack', 'Jill'])
  })
})
